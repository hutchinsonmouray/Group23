#include <iostream>
#include <unordered_map>
#include <string>
#include <vector>
#include <unordered_set>
#include <sstream>
#include <fstream>
#include <napi.h>
using namespace std;


Napi::Object parseIntoCardsFromAudio(const Napi::CallbackInfo& info)
{
    // ================================= //
    // =========== VARIABLES =========== //
    // ================================= //
    Napi::Env env = info.Env();

    string input = info[0].ToString().Utf8Value();

    Napi::Object obj = Napi::Object::New(env);

    enum kind { keyword, definition, period, nothing };
    kind state = nothing;
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
                obj.Set(Napi::String::New(env, keywrd), Napi::String::New(env, def));
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

    return obj;

}


Napi::Object parseIntoCardsFromChat(const Napi::CallbackInfo& info)
{
    Napi::Env env = info.Env();

    string input = info[0].ToString().Utf8Value();

    Napi::Object obj = Napi::Object::New(env);
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
                obj.Set(Napi::String::New(env, keywrd), Napi::String::New(env, def));
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
    

    return obj;

}

/*
void createCSV(unordered_map<string,string>& words)
{
    ofstream myfile;
    myfile.open ("/Users/abigailmartinez/Desktop/csv.txt");
    unordered_map<string, string>::iterator it;
    for (it = words.begin(); it != words.end(); it++)
    {
        myfile << it->first + "," + it->second + "\n";
    }
    myfile.close();

    cout << "csv file created." << endl<<endl;
}

void classInteraction(unordered_map<string,string>& words, string& input)
{
    ///is class interaction how many times a teacher and the student says/types the keywords in each lecture?
        //if so, merge the two maps

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
*/

Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports.Set(Napi::String::New(env, "parseIntoCardsFromAudio"),
              Napi::Function::New(env, parseIntoCardsFromAudio));
  exports.Set(Napi::String::New(env, "parseIntoCardsFromChat"),
              Napi::Function::New(env, parseIntoCardsFromChat));
  return exports;
}

NODE_API_MODULE(parser, Init)