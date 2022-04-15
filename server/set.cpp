#include <iostream>
#include <unordered_map>
#include <string>
#include <vector>
#include <sstream>
#include <fstream>
using namespace std;

/*
 * TODO
 * 	⁃	Function to import csv file - Abby
 * 	⁃	Delete function - Abby
 * 	⁃	Insert function  - Abby
 * 	⁃	Merge function - Abby
 * 	⁃	Edit the csv file function to not use file path  - Abby
 * 	⁃	Edit csv file function to include title and creator string  - Abby
 * 	- star functionality -- boolean, getter and setter

*/

unordered_map<string,pair<string,bool>> parseIntoCardsFromAudio(string& input)
{
    // ================================= //
    // =========== VARIABLES =========== //
    // ================================= //

    enum kind { keyword, definition, period, nothing };
    kind state = nothing;
    unordered_map<string,pair<string,bool>> words;
    string word; // word variable to store word
    string keywrd = "";
    string def = "";

    // making a string stream
    stringstream iss(input);

    // ================================= //
    // =========== PARSING =========== //
    // ================================= //
    // Read each word
    while (iss >> word)
    {
        if (word == "period" || word == "Period") state = period;
        if(state == keyword && word != "Definition" && word != "definition") keywrd += word + " ";
        else if(state == definition && word != "period" && word != "Period") def += word + " ";
        else if(state == period)
        {
            //to check what is being loaded
            //cout << keywrd << endl << def << endl;

            // a check to see if the teacher said keyword
            if(keywrd != "")
            {
                //store into map
                words.insert(pair<string,pair<string,bool>>(keywrd, make_pair(def, false)));
            }
            //reset vars
            state = nothing;
            keywrd = "";
            def = "";
        }
        if (word == "Keyword" || word == "keyword") state = keyword;
        else if (word == "Definition" || word == "definition") state = definition;
        else if (word == "period" || word == "Period" || word == "period.") state = period;
    }

    if (words.size() != 0) cout << "Flash cards created from teacher audio! " << endl << endl;
    return words;
}

unordered_map<string,pair<string,bool>> parseIntoCardsFromChat(string& input)
{
    // ================================= //
    // =========== VARIABLES =========== //
    // ================================= //

    enum kind { keyword, definition, period, nothing };
    kind state = nothing;
    unordered_map<string,pair<string,bool>>  words;
    string word; // word variable to store word
    string keywrd = "";
    string def = "";

    // making a string stream
    stringstream iss(input);

    // ================================= //
    // =========== PARSING =========== //
    // ================================= //
    // Read each word
    while (iss >> word)
    {
        if (word == ".") state = period;
        if(state == keyword && word != "Definition" && word != "definition") keywrd += word + " ";
        else if(state == definition && word != ".") def += word + " ";
        else if(state == period)
        {
            //to check what is being loaded
            //cout << keywrd << endl << def << endl;

            // a check to see if the teacher said keyword
            if(keywrd != "")
            {
                //store into map
                words.insert(pair<string,pair<string,bool>>(keywrd, make_pair(def, false)));
            }
            //reset vars
            state = nothing;
            keywrd = "";
            def = "";
        }
        if (word == "Keyword" || word == "keyword") state = keyword;
        else if (word == "Definition" || word == "definition") state = definition;
        else if (word == ".") state = period;
    }
    if (words.size() != 0) cout << "Flash cards created from student chat! " << endl << endl;

    return words;

}

unordered_map<string,pair<string,bool>> importCSV(string filePath){

    unordered_map<string,pair<string,bool>> newSet;

    ifstream inFile(filePath);

    if(inFile.is_open())
    {
        string lineFromFile;
        getline(inFile, lineFromFile);
        istringstream stream(lineFromFile); //stream of data coming from first line

        string creator, title;

        getline(stream, creator, '\n');

        getline(inFile, lineFromFile);
        getline(stream, title, '\n');


        //first line
        while (getline(inFile, lineFromFile))
        {
            istringstream stream(lineFromFile); //stream of data coming from first line

            string keyword, def;
            //reading cards now
            getline(stream, keyword, ',');
            getline(stream, def, '\n');

            newSet.insert(pair<string,pair<string,bool>>(keyword, make_pair(def, false)));
        }

        return newSet;
    }

    else
    {
        cout << "file is not open" << endl;
    }

}

void createCSV(unordered_map<string,pair<string,bool>>& words, string title, string creator)
{
    ofstream myfile("../csv.csv");
    unordered_map<string,pair<string,bool>>::iterator it;
    myfile << creator + "\n" << title + "\n";
    for (it = words.begin(); it != words.end(); it++)
    {
        myfile << it->first + "," + it->second.first + "\n";
    }
    myfile.close();

    cout << "csv file created." << endl<<endl;
}

void classInteraction(unordered_map<string,pair<string,bool>>& words, string& input)
{
    //Class interaction from the audio transcript
    vector<string> w;
    string word; // word variable to store word
    stringstream iss(input);
    while (iss >> word) w.push_back(word);

    unordered_map<std::string , int> count;
    for (const string & s : w) { ++count[s]; }

    cout << "printing class interaction" << endl;
    for (const auto & p : count)
        if ( words.find(p.first + ' ') != words.end())
            cout << "Word '" << p.first << "' occurs " << p.second << " times.\n";

}

//merges original set with new set
void merge(unordered_map<string,pair<string,bool>>& oldSet, unordered_map<string,pair<string,bool>>& freshSet)
{
    oldSet.insert(freshSet.begin(), freshSet.end());
}

void insertIntoSet(unordered_map<string,pair<string,bool>>& words, string keyword, string def)
{
    words.insert(pair<string,pair<string,bool>>(keyword, make_pair(def, false)));
}

void deleteFromSet(unordered_map<string,pair<string,bool>>& words, string keyword)
{
    words.erase(keyword);
}

void starCard(unordered_map<string,pair<string,bool>>& words, string keyword)
{
    unordered_map<string,pair<string,bool>>::iterator it;
    for (it = words.find(keyword); it != words.end(); it++)
    {
        it->second.second = true;
        break;
    }


}

int main() {
    unordered_map<string,pair<string,bool>>  set1;
    unordered_map<string,pair<string,bool>>  set2;
    string input = "    Hello welcome to class\n"
                   "    Today we will be going over algorithms\n"
                   "    Keyword time complexity definition is the computational complexity that describes the amount of computer time it takes to run an algorithm period\n"
                   "    So that is it for today\n"
                   "    Also Keyword good definition awesome period"
                   "    Keyword test definition test passed period"
                   "    Keyword another test that is awesome definition this is the other test passing b4 88 times period";

    string input2 = "Also Keyword good definition awesome period";

    string input3 = "00:34\n"
                    "test test.\n"
                    "00:36\n"
                    "test test test test test.\n"
                    "user avatar\n"
                    "Unknown Speaker\n"
                    "01:52\n"
                    "sheet.\n"
                    "user avatar\n"
                    "Unknown Speaker\n"
                    "07:13\n"
                    "Oh.\n"
                    "user avatar\n"
                    "Dr. Sanethia Thomas (she/her)\n"
                    "11:10\n"
                    "All right, those that are on.\n"
                    "11:13\n"
                    "Those that are on zoom can you hear me.\n"
                    "11:18\n"
                    "Can the zoom participants hear me yes okay perfect Thank you.\n"
                    "11:21\n"
                    "Thank you, thank you, thank you, thank you, thank you.\n"
                    "11:23\n"
                    "All right, happy Wednesday everyone let's go ahead and jump in and get started.\n"
                    "11:29\n"
                    "Keyword house definition a place to live period .\n"
                    "11:33\n"
                    "And it's downhill from here.\n"
                    "11:36\n"
                    "Finish out the Semester strong i'm actually in pertaining to this class.\n"
                    "11:44\n"
                    "It should be a whole lot of fun from here on out, we still have our chapter.\n"
                    "11:51\n"
                    "The chapters that we're going through, but in terms of your project you're doing the fun part you are coding, you are seeing it come to life, you are learning, you are.\n"
                    "12:02\n"
                    "Writing test and writing functionality and demoing it and showing your your peers and showing your friends and interacting with your team and basically seeing your vision come to life so that's a lot of fun all right um let me go ahead and start with some announcements.\n"
                    "12:26\n"
                    "That, I have here okay very important peer evaluation scores.\n"
                    "12:32\n"
                    "One second.\n"
                    "12:34\n"
                    "Okay perfect all right peer evaluations um.\n"
                    "12:39\n"
                    "Let me see how can I put this okay so you've completed the peer evaluation and you've scored your peers on your team, and you will receive a sprint zero grade and all the associated assignments, so the associate assignments, where the user stories software architecture.";

    string input4 = "hello keyword hi definition cool period \n"
                    "keyword hi definition no period \n"
                    "keyword hi definition si period \n"
                    "keyword hello definition no period\n";


    set1 = parseIntoCardsFromAudio(input3);

    set2 = parseIntoCardsFromAudio(input);

    merge(set1,set2);

    createCSV(set1,"Title", "Creator");

    classInteraction(set1,input3);

    starCard(set1,"test ");

    unordered_map<string,pair<string,bool>> newSet = importCSV("../newCSV.csv");

    return 0;
}
