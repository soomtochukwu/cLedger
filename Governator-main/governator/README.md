# Governator

<!-- <img src="../governator/public/logo.png" width="400" style="border-radius: 10px;" class="fade-in"> -->

Empowering Democracy, Securing Every Vote.

## Table of Contents
- [Project Description](#project-description)
- [Key Features](#key-features)
- [Installation](#installation)
- [Usage](#usage)
- [Technicalities](#technicalities)
- [Smart Contract Functions](#smart-contract-functions)
  - [registerPerson](#registerperson)
  - [getAllPersons](#getallpersons)
  - [initiateElection](#initiateelection)
  - [castVote](#castvote)
  - [concludeElection](#concludeelection)
  - [changeElectionDuration](#changeelectionduration)
- [Authors and Acknowledgments](#authors-and-acknowledgments)
- [FAQ](#faq)
- [Support](#support)
- [Changelog](#changelog)

## Project Description

Governator is a decentralized application (dApp) designed to facilitate open governance in African electoral processes. By leveraging blockchain technology, Governator enables secure voter registration, anonymous voting, and transparent vote collation, including the participation of diaspora voters. Governator ensures the anonymity of all cast votes through smart contracts, thereby enhancing trust, fairness, and participation in elections across Africa.

## Key Features

- **NFT Minting**: Upon registration, users receive an NFT with a unique identity number, which can be added to their wallet immediately after signing up.
- **Anonymous Voting**: Ensures voter identities remain confidential, preventing potential coercion or manipulation.
- **Fair Elections**: Eliminates biases, ensuring that all votes carry equal weight.
- **NFT-Based Voting Rights**:
  - **Tokenization**: Each registered voter is minted a unique NFT, acting as a digital passport to participate in elections.
  - **Proof of Ownership**: NFTs provide verifiable proof of voting rights, preventing fraud and double voting.
- **Decentralized Governance**:
  - **Community-Driven**: Elections can be initiated and concluded by the community, ensuring democratic control.
  - **Transparency**: All voting activities, including election results and moderator selections, are publicly verifiable on the blockchain.
- **Moderator Selection**:
  - **Democratic Process**: Moderators are chosen through a transparent voting mechanism, ensuring accountability and fairness.
  - **Oversight**: Moderators oversee the election process, ensuring compliance with established rules.

## Installation

### Prerequisites

To install and run Governator, ensure you have the following:

- Node.js (>= 18.x)
- npm (>= 6.x)
- Next.js
- Web3.js
- Hardhat
- wagmi
- rainbow-me/rainbowkit

### Installation Steps

1. Clone the repository:  
   ```bash
   git clone https://github.com/soomtochukwu/Governator
   cd governator
2. Install dependencies:
   ```bash
   npm install
3. Start the development server:
   ```bash
   npm run dev

### Usage

Once the development server is running, open your browser and navigate to http://localhost:3000. From here, you can register as a voter, cast votes, and explore the features of Governator.

### Technicalities
Governator's smart contracts integrate with external contracts from the lib directory:

- sanityChecks.sol: Handles restrictions, access control, etc.
- storage.sol: Manages decentralized data storage.
- NFT.sol: Facilitates NFT minting and tracking for voting rights.

### Smart Contract Functions

1. **registerPerson**  

2. **getAllPersons**  

3. **initiateElection**  

4. **castVote**

5. **concludeElection**

6. **changeElectionDuration**

<img src="../governator/public/NFT_BG.png" width="300" style="border-radius: 15px;">

### Authors and Acknowledgments 
#### Main Contributors

- Somtochukwu K. Onwuajuese
- Ibeaka Godson
- Okoye Emmanuel Obiajulu
- Ughanze Paul Emeka
- Chibuzo Franklin Odigbo

### FAQ   
**1. Who can vote?**
A registered voter who possesses an NFT and has not already voted in the specific election.

**2. What happens when a count is tied?**  
The election continues for another 2 days.

**3. How long does an election last by default, and can it be changed?**  
The default duration is 4 days, which can be changed using the changeElectionDuration function.

### Support
For support, please contact [your email or support link].

### Changelog
- v1.0.0 - Initial release with core functionalities: voter registration, NFT minting, election initiation/coordination, voting, and conclusion.
