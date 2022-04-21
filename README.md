# StudyStream

## About The Project

StudyStream is a tool that enables students to extract the information that is most relevant to them from their recorded Zoom lectures. This tool scans the chat and lecture transcripts, and creates relevant flashcards that the student can later study. With the rise of online learning, students that miss class or are reviewing old Zoom lectures need a way to easily and efficiently access the critical information from class while skimming over the less important moments. StudyStream is at the cutting edge of this trend. By parsing Zoom lectures into a flashcard format that makes it easy to study and learn the content of the lecture, StudyStream gives students the tools to succeed in an online learning environment.


## Built With

* [React.js](https://reactjs.org/)
* [Node.js](https://https://nodejs.org)
* [MongoDB](https://www.mongodb.com/)



## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/hutchinsonmouray/StudyStream.git
   ```
2. Install NPM packages in root, client, and server directory
   ```sh
   npm install
   ```
3. Enter the database URI in config.env
   ```js
   ATLAS_URI='ENTER YOUR API'
   ```



<!-- USAGE EXAMPLES -->
## Usage

Start Node.js server and React.js client in the root directory
   ```sh
   npm start
   ```



<!-- ROADMAP -->
## Roadmap

- [x] Store Flashcards in database
- [x] Display Flashcards in Set interface
- [ ] Translate C++ functions to create and store lecture summary and class interaction information
- [ ] Create import/export of flashcard set files
- [ ] Create User Accounts that permanently save sets


<!-- CONTACT -->
## Contributors/Contact

* Mouray Hutchinson - mouray8930@gmail.com
* Adam Horton - adam.horton@ufl.edu
* Angelina Kapiniaris - a.kapiniaris@ufl.edu
* Abigail Martinez - abigailmartinez.uf@gmail.com

Project Link: [https://github.com/hutchinsonmouray/StudyStream](https://github.com/hutchinsonmouray/StudyStream)