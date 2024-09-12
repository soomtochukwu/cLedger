# Governator

<img src="https://github.com/soomtochukwu/Governator/blob/main/governator/public/LOGO%20(1).png" width="200" style="border-radius: 10px; display: block; margin-left: auto; margin-right: auto;" align="center" class="fade-in">
<p style="font-size: 20px; font-weight: bold; color: #007BFF; margin-top: 20px; margin-bottom: 20px;">
  Empowering Democracy, Securing Every Vote.
</p>

## 📚 Table of Contents
- 📖 [Project Description](#project-description)
- 🔗 [Link](#link)
- ✨ [Key Features](#key-features)
- 🎥 [Preview](#preview)
- 🛠️ [Usage](#usage)
- 🧰 [Technicalities](#technicalities)
- 📜 [Smart Contract Functions](#smart-contract-functions)
  - 📝 [registerPerson](#registerperson)
  - 👥 [getAllPersons](#getallpersons)
  - 🚀 [initiateElection](#initiateelection)
  - 🗳️ [castVote](#castvote)
  - 🏁 [concludeElection](#concludeelection)
  - ⏲️ [changeElectionDuration](#changeelectionduration)
- 👥 [Authors and Acknowledgments](#authors-and-acknowledgments)
- ❓ [FAQ](#faq)
- 🆘 [Support](#support)
- 🔄 [Changelog](#changelog)

## 📘 Project Description

**Governator** is a decentralized app (voting platform) designed to:

- **Secure** and **streamline decision-making processes** in Africa.
- Utilize **blockchain technology** for transparency and anonymity.
- Facilitate **governmental electoral processes** and **institutional decision-making**.

This platform is at the forefront of leveraging technology to enhance democracy and governance.

For more information, visit our [website](https://governator.vercel.app) or check out our [documentation](https://github.com/soomtochukwu/Governator/blob/main/smartC/README.md).
## 🌐 Link

Visit [Governator](https://governator.vercel.app) to explore our platform's features:

- 📝 **Register as a voter** - Join the community and get ready to make your voice heard.
- 🗳️ **Cast your votes** - Participate in elections with a simple click.
- 🔍 **Explore** - Discover all the features Governator has to offer.

Start making a difference today!
## ✨ Key Features

- 🎨 **NFT Minting**
  - Upon registration, users receive an NFT with a unique identity number, which can be added to their wallet immediately after signing up.

- 🕵️ **Anonymous Voting**
  - Ensures voter identities remain confidential, preventing potential coercion or manipulation.

- ⚖️ **Fair Elections**
  - Eliminates biases, ensuring that all votes carry equal weight.

- 🗳️ **NFT-Based Voting Rights**
  - **Tokenization**: Each registered voter is minted a unique NFT, acting as a digital passport to participate in elections.
  - **Proof of Ownership**: NFTs provide verifiable proof of voting rights, preventing fraud and double voting.

- 🌐 **Decentralized Governance**
  - **Community-Driven**: Elections can be initiated and concluded by the community, ensuring democratic control.
  - **Transparency**: All voting activities, including election results and moderator selections, are publicly verifiable on the blockchain.

- 👥 **Moderator Selection**
  - **Democratic Process**: Moderators are chosen through a transparent voting mechanism, ensuring accountability and fairness.
  - **Oversight**: Moderators oversee the election process, ensuring compliance with established rules.
## Preview
<img src="https://github.com/soomtochukwu/Governator/blob/main/governator/public/HomeScreen.png" width="600" style="border-radius: 10px 10px 0px 0px; display: block; margin-left: auto; margin-right: auto;" class="fade-in">
<!-- <img src="https://github.com/soomtochukwu/Governator/blob/main/governator/public/Desktop%20-%203.jpg" width="600" style="border-radius: 0px 0px 10px 10px; display: block; margin-left: auto; margin-right: auto;" class="fade-in">
<img src="https://github.com/soomtochukwu/Governator/blob/main/governator/public/Desktop%20-%204.jpg" width="600" style="border-radius: 0px 0px 10px 10px; display: block; margin-left: auto; margin-right: auto;" class="fade-in">
 -->

### 📋 Prerequisites

To install and run Governator, ensure you have the following:

- 🟢 **Node.js** (>= 18.x) - [Download Node.js](https://nodejs.org/)
- 📦 **npm** (>= 6.x) - Comes with Node.js
- 🌐 **Next.js** - [Get Started with Next.js](https://nextjs.org/docs/getting-started)
- 🔗 **Web3.js** - [Web3.js Documentation](https://web3js.readthedocs.io/)
- 🛠️ **Hardhat** - [Hardhat Setup](https://hardhat.org/getting-started/)
- 🌈 **wagmi** - [wagmi Docs](https://wagmi.sh/)
- 🌟 **rainbow-me/rainbowkit** - [RainbowKit Setup](https://www.rainbowkit.com/docs/introduction)
### 🛠 Technicalities

Governator's smart contracts are designed with modularity and efficiency in mind. They integrate with external contracts from the `lib` directory, each serving a unique purpose:

- `sanityChecks.sol`: Ensures that all transactions and interactions adhere to predefined rules and permissions, enhancing security and access control.
- `storage.sol`: A robust solution for decentralized data storage, managing the integrity and accessibility of data on the blockchain.
- `NFT.sol`: Central to our platform, this contract handles the minting and tracking of NFTs, which are pivotal for establishing and verifying voting rights.
### 📜 Smart Contract Functions

Explore our core functionalities:

- 📝 **[registerPerson](https://github.com/soomtochukwu/Governator/blob/main/smartC/README.md#1-registerperson)** - Register a new participant in the system.
- 📊 **[getAllPersons](https://github.com/soomtochukwu/Governator/blob/main/smartC/README.md#2-getallpersons)** - Retrieve a list of all registered participants.
- 🗳️ **[initiateElection](https://github.com/soomtochukwu/Governator/blob/main/smartC/README.md#3-initiateelection)** - Start a new election process.
- 🗳 **[castVote](https://github.com/soomtochukwu/Governator/blob/main/smartC/README.md#4-castvote)** - Cast a vote in an ongoing election.
- 🏁 **[concludeElection](https://github.com/soomtochukwu/Governator/blob/main/smartC/README.md#5-concludeelection)** - Finalize the election and announce the results.

<figure align="center">
  <img src="https://github.com/soomtochukwu/Governator/blob/main/governator/public/mobileview.jpg" width="300" alt="Mobile View" style="border-radius: 15px;">
  <figcaption>Mobile view of the Governator app showcasing its loading state.</figcaption>
</figure>

### 📝 Authors and Acknowledgments

### 👥 Main Contributors

- **Somtochukwu K. Onwuajuese** - Smart Contract Developer | [![Twitter](https://img.shields.io/twitter/url/https/twitter.com/username.svg?style=social&label=Follow%20%40tweetSomto)](https://x.com/tweetSomto)
- **Ibeaka Godson** - Backend Developer | [![Twitter](https://img.shields.io/twitter/url/https/twitter.com/username2.svg?style=social&label=Follow%20%40cobbyfranky)](https://x.com/cobbyfranky)
- **Okoye Emmanuel Obiajulu** - Frontend Developer | [![Twitter](https://img.shields.io/twitter/url/https/twitter.com/username3.svg?style=social&label=Follow%20%40okoye_emma_obi)](https://x.com/okoye_emma_obi)
- **Ughanze Paul Emeka** - Project Manager | [![Twitter](https://img.shields.io/twitter/url/https/twitter.com/username4.svg?style=social&label=Follow%20%40PaulitoBankless)](https://x.com/PaulitoBankless)
- **Chibuzo Franklin Odigbo** - UI/UX Designer | [![Twitter](https://img.shields.io/twitter/url/https/twitter.com/username5.svg?style=social&label=Follow%20%40OdigboF)](https://x.com/OdigboF)
### ❓ FAQ

- **🗳️ Who can vote?**  
  *A registered voter who possesses an NFT and has not already voted in the specific election.*

- **🤔 What happens when a count is tied?**  
  *The election continues for another 2 days.*

- **⏳ How long does an election last by default, and can it be changed?**  
  *The default duration is 4 days, which can be changed using the `changeElectionDuration` function.*
### 🤝 Support
For any questions or support, feel free to reach out to us through this email governator2024@gmail.com.

### 🔄 Changelog
Keep track of all changes and updates to our project:

- 🚀 **v1.0.0 - Initial Release**
  - Core functionalities introduced:
    - 📝 Voter registration
    - 🎨 NFT minting
    - 🗳️ Election initiation and coordination
    - ✅ Voting process
    - 🏁 Conclusion of elections
