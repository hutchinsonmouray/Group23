#include <iostream>
#include <unordered_map>
#include <string>
#include <vector>
#include <sstream>
using namespace std;

unordered_map<string,string> parseIntoCards(string input)
{
    // ================================= //
    // =========== VARIABLES =========== //
    // ================================= //

    enum kind { keyword, definition, period, nothing };
    kind state = nothing;
    unordered_map<string,string> words;
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
            cout << keywrd << endl << def << endl;

            //store into map
            words.insert(pair<string,string>(keywrd,def));

            //reset vars
            state = nothing;
            keywrd = "";
            def = "";
        }
        if (word == "Keyword" || word == "keyword") state = keyword;
        else if (word == "Definition" || word == "definition") state = definition;
        else if (word == "period" || word == "Period" || word == "period.") state = period;
    }
return words;

}

unordered_map<string,string> lectureSummary(string input)
{
    cout << "LECTURE SUMMARY" << endl;
    cout << "---------------" << endl;


    enum kind { keyword, definition, period, nothing };
    kind state = nothing;
    unordered_map<string,string> words;
    string word; // word variable to store word
    string keywrd = "";
    string def = "";

    // making a string stream
    stringstream iss(input);

    string timeStamp = ""; 
    int count = 0;

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

            cout << keywrd << ": " << def << endl;

            //store into map
            words.insert(pair<string,string>(keywrd,def));

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
    
    cout << endl;



return words;
}

int main() {
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
                    "keyword input and output devices definition anything people use to input information to the computer or to take information out period \n"
                    "user avatar\n"
                    "Dr. Sanethia Thomas (she/her)\n"
                    "11:10\n"
                    "All right, those that are on.\n"
                    "11:13\n"
                    "keyword software testing definition the process of evaluating and verifying that a software product or application does what it is supposed to do period .\n"
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
                    "keyword sad definition not happy period\n"
                    "12:34\n"
                    "keyword an apple definition not an orange period\n"
                    "12:39\n"
                    "Let me see how can I put this okay so you've completed the peer evaluation and you've scored your peers on your team, and you will receive a sprint zero grade and all the associated assignments, so the associate assignments, where the user stories software architecture.";


    lectureSummary(input3);

    // remove all ',' and '.'
    // to count how many times keyword was said, store all keywords into vector and store all words from transcript into a set?

    return 0;
}
