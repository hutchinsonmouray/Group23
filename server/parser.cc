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

Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports.Set(Napi::String::New(env, "parseIntoCardsFromAudio"),
              Napi::Function::New(env, parseIntoCardsFromAudio));
  exports.Set(Napi::String::New(env, "parseIntoCardsFromChat"),
              Napi::Function::New(env, parseIntoCardsFromChat));
  return exports;
}

NODE_API_MODULE(parser, Init)