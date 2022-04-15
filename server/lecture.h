#ifndef lecture_H
#define lecture_H
#include <iostream>
#include <sstream>
#include <vector>
#include <unordered_map>
using namespace std;

class LectureSet
{
public:
    string lectureName; // name of lecture
    string creator; // name of creator
    string transcript; // lecture transcript
    string notecard;
    bool starred = false;
    unordered_map<string, string> set;
    string completeSet = "";
    
    
void setLectureName(string l)
{
    lectureName = l;
}
void setCreator(string c)
{
    creator = c;
}
void setTranscript(string t)
{
    transcript = t;
}
string getLectureName()
{
    return lectureName;
}
string getCreator()
{
    return creator;
}
string getTranscript()
{
    return transcript;
}

// make complete set
void MakeCompleteSet()
{

    enum kind { keyword, definition, period, nothing };
    kind state = nothing;
    vector<string> listOfDefs;
    string word; // word variable to store word
    string keywrd = "";
    string def = "";

    // making a string stream
    stringstream iss(getTranscript());

    string timeStamp = ""; 
    int count = 0;

    completeSet += "\"" + getLectureName() + "\"" + "\n" + "By: " + getCreator() + "\n" + "\n";
    // displays entire list of vocab words
    while (iss >> word)
    {
        if (isdigit(word[0]))
        {
            timeStamp = word; // including timestamp of definitions
        }
        if (word == "period" || word == "Period")
            state = period;
        if (state == keyword && word != "Definition" && word != "definition")
        {
            // excluding capitalization of certain words
            if ((word != "a" && word != "an" && word != "the" && word != "and" && word != "as"
            && word != "but" && word != "or" && word != "nor" && word != "at" && word != "by"
            && word != "for" && word != "from" && word != "in" && word != "into" && word != "of"
            && word != "off" && word != "on" && word != "onto" && word != "out" && word != "up"
            && word != "with" && word != "to") || (count == 0))
            {
                char firstChar = (char) toupper(word[0]);
                word.erase(0, 1);
                word = firstChar + word;
                keywrd += word + " ";
                count++;
            }
            else
                keywrd += word + " ";
        }
        else if (state == definition && word != "period" && word != "Period")
            def += word + " ";
        else if (state == period && keywrd != "" && def != "")
        {
            keywrd.pop_back();
            //to check what is being loaded
            keywrd = "(" + timeStamp + ") " + keywrd;

            //store into map
            listOfDefs.push_back(keywrd + ": " + def);

            //reset vars
            state = nothing;
            keywrd = "";
            def = "";
            count = 0;
        }
        if (word == "Keyword" || word == "keyword")
            state = keyword;
        else if (word == "Definition" || word == "definition")
            state = definition;
        else if (word == "period" || word == "Period" || word == "period.")
            state = period;
    }


    for (int i = 0; i < listOfDefs.size(); i++)
    {
        completeSet += listOfDefs[i] + "\n";
    }
}

// get complete set of lecture
string GetCompleteSet()
{
    return completeSet;
}


};

#endif