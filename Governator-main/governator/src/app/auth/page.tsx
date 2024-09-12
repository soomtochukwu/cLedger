"use client";
// http://localhost:3000/login
// This page is responsible for rendering the login page

import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { PinataSDK } from "pinata";

import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { Governator_ABI, Governator_Address } from "../../../var";

export default function Login() {
  const //
    [callSign, set_callSign] = useState(""),
    [hash, set_hash] = useState(""),
    [isRegistered, set_isRegistered] = useState(Boolean),
    { isConnected, address } = useAccount(),
    { writeContractAsync } = useWriteContract(),
    { push } = useRouter(),
    [fourDigitCode, setFourDigitCode] = useState(""),
    [userExists, setUserExists] = useState(false),
    Person = useReadContract({
      abi: Governator_ABI,
      address: Governator_Address,
      functionName: "Persons",
      args: [address as `0x${string}`],
    }),
    router = useRouter(),
    [NFTID, setNFTID] = useState("4"),
    [NFTURL, setNFTURL] = useState(""),
    [IpfsHash, setIpfsHash] = useState(Object),
    json = {
      html: `
            <div class="ngtBG">
                ${"#" + NFTID}
                <span class="signature">#Governator</span>
            </div>
            `,
      css: `.ngtBG {
  background-image: url('https://i.ibb.co/Jk0Njkg/voter-s-nft-card.png');;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position:relative;
  color: rgb(187 247 208);

    font-size: 4rem;
    line-height: 1;

    font-weight: 800;
        font-family: monospace;


    width: 150px ;

    height: 250px ;

    text-align: center;

    justify-content: center;
align-items: center;
 border-radius: 0.5rem;
 display: flex;
 border-width: 2px;
}
 .signature {
  position:absolute;

 bottom: 0;
    font-size: 10px;
 right: 0;
 }

  `,
    },
    username = "7d99157d-a72a-420e-8dfe-754cd86f1c92",
    password = "501757f5-579a-4cb2-ac77-57825dfd1d0a",
    options = {
      method: "POST",
      body: JSON.stringify(json),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(username + ":" + password),
      },
    },
    contractABI = Governator_ABI,
    contractAddress = Governator_Address,
    mintToken = async (_nft) => {
      const tx = await writeContractAsync({
        abi: Governator_ABI,
        address: Governator_Address,
        functionName: "safeMint",
        args: [_nft],
      });
      console.log("NFT minted:", tx);
      push("/dashboard");
    },
    JWT =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIzMWNiOWY3Ny01Y2Y2LTQzNDYtOGE1OS1jNTljNWRhNDViZmQiLCJlbWFpbCI6Im1hemlzb210b2NodWt3dUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiYzU0ZTcyNzY1ZjllNDlmY2ExZmMiLCJzY29wZWRLZXlTZWNyZXQiOiIyMWM2OWJiMzdjODdjNDllZTJiYmFkZDUyNDU1ZDBjMjFlOGQ5MzdkMzg5OTk5ZDk3ZTNjZDQ4ZGQ5ZmRhMGIzIiwiaWF0IjoxNzI1MjkxNDI2fQ.w1WgfzWPinznarRsfijiID7uEsPzlWUDkbJeWNXwHH0",
    gate = "https://api.pinata.cloud/pinning/pinFileToIPFS",
    pinata = new PinataSDK({
      pinataJwt: JWT,
      pinataGateway: gate,
    });
  useEffect(() => {
    if (NFTURL) {
      let NFT_image = {};
      (async () => {
        try {
          const //
            response = await fetch(NFTURL + ".png"),
            blob = await response.blob(),
            file = new File([blob], `voter_${NFTID}.jpg`, { type: blob.type });
          NFT_image = await pinata.upload.file(file);
          console.log(NFT_image);
        } catch (error) {
          console.error(error);
        }

        try {
          const //
            metadata = {
              attributes: [
                {
                  trait_type: "Type",
                  value: "vote",
                },
                {
                  trait_type: "ID",
                  value: NFTID,
                },
              ],
              description:
                "This NFT grants the holder the ability to vote in Governator decentralized elections.",
              // @ts-ignore
              image: `ipfs://${NFT_image.IpfsHash}`,
              name: "Governator",
            },
            metadataBlob = new Blob([JSON.stringify(metadata)], {
              type: "application/json",
            }),
            file = new File([metadataBlob], `metadata_voter${NFTID}.json`, {
              type: "application/json",
            }),
            NFT_image_Metadata = await pinata.upload.file(file);
          // console.log(NFT_image);
          console.log(NFT_image_Metadata);
          console.log("...minting");
          mintToken(`ipfs://${NFT_image_Metadata.IpfsHash}`);
          // console.log(upload);
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, [NFTURL]);

  // checking if a user exists in a smart contract or database
  function checkUserExists(code) {
    return code === "1234"; // Example: if code is "1234", the user exists
  }

  const handleFourDigitChange = (e) => {
    const code = e.target.value;
    // Ensure only numbers are entered and limit to 4 digits
    if (code.match(/^\d{0,4}$/)) {
      setFourDigitCode(code);
      if (code.length === 4) {
        const exists = checkUserExists(code);
        setUserExists(exists);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the four-digit code is valid and user exists
    if (fourDigitCode.length === 4 && userExists) {
      // If everything is okay, redirect to the dashboard
      router.push("/dashboard");
    } else {
      // Otherwise, display an error message (handled in JSX)
      console.log("User does not exist or invalid code.");
    }
  };
  useEffect(() => {
    if (!(isConnected && address)) {
      push("/");
    }
  }, [isConnected, address, push]);

  useEffect(() => {
    if (address && isConnected && Person.data) {
      (async () => {
        setNFTID(String(Person.data[0]));
        set_isRegistered(Person.data[4]);
      })();
    }
  }, [Person.data, address, isConnected]);

  useEffect(() => {
    isRegistered ? push("/dashboard") : null;
  }, [isRegistered, push]);
  useEffect(() => {}, []);
  useEffect(() => {
    if (hash.length) {
      (async () => {
        console.log("generating");
        fetch("https://hcti.io/v1/image", options)
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              return Promise.reject(res.status);
            }
          })
          .then((data) => {
            // Image URL is available here
            console.log(data.url);
            setNFTURL(data.url);
          })
          .catch((err) => console.error(err));
      })();
    }
    // push("/")
  }, [hash]);
  //
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      {isRegistered ? (
        "Login in"
      ) : (
        <div className="min-h-screen flex">
          <div>
            <div className="flex-1 flex flex-col justify-center items-center bg-white p-8">
              <div className="w-full max-w-md animate-fade-in-down">
                <div className="flex justify-center mb-6">
                  <Image
                    src="/Hidden-mining-bro2.svg"
                    alt="Governator Logo"
                    width={300}
                    height={300}
                    className="object-contain animate-pulse"
                  />
                </div>
                <div className="*:p-2 *:px-4 space-x-3">
                  <input
                    className=""
                    type="text"
                    maxLength={4}
                    placeholder="enter your preferred call sign"
                    onChange={(e) => {
                      set_callSign(e.currentTarget.value.toUpperCase());
                    }}
                    value={callSign.toUpperCase()}
                  />
                  <button
                    className="bg-green-800"
                    onClick={async () => {
                      // const tx = ;
                      await set_hash(
                        await writeContractAsync({
                          abi: Governator_ABI,
                          address: Governator_Address,
                          functionName: "registerPerson",
                          args: [callSign],
                        })
                      );
                    }}
                  >
                    Register Now
                  </button>
                </div>
              </div>
            </div>

            {/*************************************************Right Div ********************************************** */}

            <div className="hidden lg:flex flex-1 bg-gray-900 text-white items-center justify-center">
              <div className="w-full max-w-lg">
                <Image
                  src="/welcomeback.svg"
                  alt="Governator image"
                  width={1000}
                  height={1000}
                  className="object-contain animate-fade-in-left"
                />
              </div>
            </div>
          </div>
          {/*************************************************Left Div ********************************************** */}
        </div>
      )}
    </div>
  );
}
