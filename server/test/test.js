var addon = require('bindings')('parser');
var expect = require("chai").expect;

var string1 = "Also Keyword good definition awesome period";
var string1_1 = "Keyword vocab word definition def period";
var string1_2 = "Keyword vocab2 word definition def2 period \n"; //passed
var string2= "Also Keyword good definition awesome period\n" +
    "Keyword test definition test passed period\n" +
    "Keyword another test that is awesome definition this is the other test passing b4 88 times period"; //

var string_shorter = "09:54 There has been a lot of improvements for you all this semester, and so we want to keep perpetuating that through the subsequent semesters. \n" +
    "10:02 Just so we can provide a better learning experience for the class, so I do a mid semester, evaluation and I would love to get your your feedback on the Open Source assignment so that's that. \n" +
    "10:17 I want to reiterate attendance for lab discussions so i'm going to have the peer mentors start taking attendance at the beginning of the class. \n" +
    "10:30 There are some issues where people come late and it just. \n" +
    "10:34 It will do you a disservice going forward and your team a disservice going forward if a you don't show up or two you come late so we'll start taking attendance at the beginning of the class please make sure you arrive on time. \n" +
    "10:49 and make sure you have your cameras on that'd be greatly appreciated. \n" +
    "10:54 Okay third announcement this week is Chapter one and two. \n" +
    "11:01 So, at the end of Chapter exercises just don't jump in and complete all of them, because. \n" +
    "11:07 I have selected which ones, I would like you to complete so they'll still be a total of 10 questions, even though we're going over two chapters. \n" +
    "11:14 So I have some questions from Chapter one and some from Chapter two so just look at that assignment, so you can be aware, of which one you're supposed to answer. \n" +
    "11:26 Okay um and that's all hopefully you enjoyed the guest lecture on Friday. \n" +
    "11:33 Professor Alex I always have worked with him in the past and. \n" +
    "11:40 We are both trying to make software engineering great he's done a lot of work with it within the class so i'm glad you all had a chance to hear him and hear a different perspective. \n" +
    "11:51 I will have other guest lecturers throughout the Semester as well just because I think it's important for you to hear. \n" +
    "11:58 Industry side as well as the academic side so look forward to that all right let's go ahead and get started, for today super excited about jump starting today. \n" +
    "12:12 Okay, so you're learning objectives i've had these up there, so you've seen these we're going to go over the agile. \n" +
    "12:18 This is good, this is what is going to carry us through the rest of the Semester and i'm super excited because you will walk away understanding and knowing what is. \n" +
    "12:29 happening in industry, right now, what is the best practice in industry, right now, so that's amazing and then i'm going to go over the process for your group project and tell you how you will be graded so super excited about that as well. \n" +
    "12:46 we've talked extensively about the waterfall on just some brief highlight that is a hand off from one. \n" +
    "12:56 part to another, so one part has to finish first everything gets signed off, and then they hand it off to the next person that's the essence of waterfall. \n" +
    "13:07 The essence of agile is taking the scrum methodology meaning everybody comes in, as a unit working together for a common goal, moving that forward quickly having quick gains without having a linear process it's more of a. \n" +
    "13:29 iterative circular process so let's see if we can. \n" +
    "13:36 just give you a visual question when you build a website for major brand with more than 200 million you. \n" +
    "13:47 draw a crowd for those that are not aware. \n" +
    "14:24 have a common goal. \n" +
    "14:30 Okay. \n" +
    "14:32 that that is where agile adopted its terminology scrum from the sport of rugby, which is one of my favorite sports to watch, but the whole idea behind it is everybody working together for that common goal, so within Chapter two, we have agile methods and then we have extreme programming. \n" +
    "14:58 So. \n" +
    "15:00 agile came along. \n" +
    "15:02 And the there was a group of people, just like a group of people that. \n" +
    "15:07 address the software crisis, a group of people came together highly intelligent people to come up with the agile manifesto. \n" +
    "15:14 So why do we even have the agile and how is it better over other processes, and so the idea is to have and value individuals and interactions over processes and tools. \n" +
    "15:29 Right, so a lot of times you can get caught up within the process as the process in terms of the waterfall has to go from Stage one to stage two Stage three to stage four before you make any gains. \n" +
    "15:45 Within keyword agile definition a way to manage a project by breaking it up into several phases period so within agile, the idea is to jump in there and and start working. \n";

var string4= " \n" +
    " Dr. Sanethia Thomas (she/her) 03:46 Can you hear me. \n" +
    " \n" +
    " Mikayla Hill 03:48 yep I can hear you. \n" +
    "03:52 Can you hear me. \n" +
    " \n" +
    " Dr. Sanethia Thomas (she/her) 04:00 Can you try speaking again hi how you doing. \n" +
    " \n" +
    " Mikayla Hill 04:02 Can you hear me. \n" +
    " \n" +
    " Unknown Speaker 04:07 No. \n" +
    " \n" +
    " Dr. Sanethia Thomas (she/her) 04:20 Okay try speaking again, please. \n" +
    " \n" +
    " Mikayla Hill 04:22 Can you hear me now. \n" +
    "04:27  Can you hear me. \n" +
    " \n" +
    " Dr. Sanethia Thomas (she/her) 04:38 I don't hear you hold on for a second. \n" +
    "04:59  Please try talking. \n" +
    " \n" +
    " Mikayla Hill 05:01 Can you hear me. \n" +
    "05:04  Hello. \n" +
    " \n" +
    " Unknown Speaker 05:06 This. \n" +
    " \n" +
    " Dr. Sanethia Thomas (she/her) 05:11 And up here. \n" +
    "05:14  All the way to 76 i've got a. \n" +
    "05:18 i've been doing that Michaela if you can just keep saying test test test. \n" +
    " \n" +
    " Mikayla Hill 05:23 test test test test. \n" +
    " \n" +
    " Dr. Sanethia Thomas (she/her) 05:26 Okay, thank you, thank you. \n" +
    " \n" +
    " Mikayla Hill 05:29 All right. \n" +
    " \n" +
    " Dr. Sanethia Thomas (she/her) 05:30 You all the way up. \n" +
    "05:32 This this was computed volume you okay so you're going over there, but then you have the system. \n" +
    ". \n" +
    "15:29 Right, so a lot of times you can get caught up within the process as the process in terms of the waterfall has to go from Stage one to stage two Stage three to stage four before you make any gains. \n" +
    "15:45 Within keyword agile definition a way to manage a project by breaking it up into several phases period so within agile, the idea is to jump in there and and start working. \n" +
    "17:36 And then you have keyword feature driven development definition where you identify the features that drives your development period , \n" +
    "19:03 If you choose to use circle ci you can, if your team chooses to use some other continuous integration platform that's fine as well. \n" +
    "19:12 test first development, so we will get in this I believe week eight where we talk about software testing actually in some forms of keyword extreme programming definition every line of code is tested period every single line of code is tested. \n" +
    "19:30 When we get to software testing module we're going to do a case study on Google, how they really value test driven development, a lot of times. \n" +
    "19:39 people think software testing is a waste of time, but it really isn't it saves you time in the long run and we'll talk about that more. \n" +
    "21:07 And then keyword collective ownership definition is everyone saying I own a part of this, therefore i'm on your scrum team, and I am pushing forward together with everyone for the common goal period , so that's extreme programming, in a nutshell. \n" +
    "21:24 Okay, so. \n" +
    "21:27 This is a repeat slide you've all seen this, but now we're getting into scrum. \n" +
    "24:34 What what what what is what are they working on what they plan to do what type of issues they have in their way, and the whole idea is that everybody's on the same page so that's the daily scrum. \n" +
    "24:45 And then, from your keyword sprint execution definition having a potential ship mobile product that's that small released version period I talked about on the previous slide. \n" +
    "24:56 Something that is functional, something that is deliverable that you can put it in the hands of the customer, and they can really see the vision come to life. \n" +
    "25:09 Every sprint has a keyword sprint review definition you present either to stakeholders, managers, customers or another development team period \n" +
    "         \n" +
    "25:18 And each presentation will do in this class will be a different audience. \n" +
    "25:23 One of the event requirements is for you to be able to communicate technical details. \n" +
    "25:30 To a wide variety of audiences there's one thing to know how to program and understand it yourself, but what good does it do if you can't explain what you're doing so that's one of the requirements, a bit that i'm held as a standard to make sure that you have exposure to do. \n" +
    "25:48 So that's the sprint review and then the keyword sprint-retrospective definition where you look back and evaluate how your team has done this entire process and you figure out what practices, you want to keep period . \n" +
    "27:05 way more than just web applications or websites right so we're not doing you a disservice by just teaching you how to build a website products can be anything. \n" +
    "27:14 For your group project, you can build anything, be creative have fun, you can do whatever you want to do in any language that you want to do it in we talked about the product owner. \n" +
    "27:26 we've talked about the scrum master. \n" +
    "27:30 we've talked about the development team. \n" +
    "27:34  keyword Product backlog definition  it houses all your features and you do estimation estimation is huge period . \n" +
    " \n" +
    "33:11 But if you accept it, then you can definitely turn that around and learn from it so i'm within agile, because it moves so quickly you're not going to know everything, one of the ta is my second semester. \n" +
    "33:26 was like we need to teach the value or how to Google search something, because now, the training wheels are off and technology is ever increasing So if you stay in this field, you will be ever learning. \n" +
    "33:42 And it takes a skill set to continue to learn and to continue to educate yourself favor adaptive it's exploratory approach embrace change and balance predictive upfront work with adaptive just in time work. \n" +
    " \n" +
    " \n" +
    "40:45 Here we go. \n" +
    "40:47 Oh, this says i'm here it's all about the process that's what this says Okay, this is what our roadmap looks like I talked about sprint zero. \n" +
    "41:00 In this product and planning at bring this product planning and design phase everyone, this is three weeks, this is three weeks, this is two weeks okay. \n" +
    "41:13 You have your project proposal that's what you all, are working on now next week we're going to tackle user stories and the product backlog going to start building out those features. \n" +
    "41:24 you're going to do your capacity and velocity so the estimations. \n" +
    "41:29 You will learn about software architecture and identify which architecture is best suited for your product, you will show that on system models, such as a system context model. \n" +
    "41:44 And you will submit the software architecture model, you have your sprint review zero, which is basically your presentation. \n" +
    "41:53 You sprint respective and your peer evaluation, so all that's going to happen within the next couple of weeks after that you'll start writing software tests Now let me say this. \n" +
    "42:05 You can definitely start writing your software test early. \n" +
    " 42:11 Because your configuration environment is set up, you can start writing your test.       keyword Capacity definition is based on the team's expected or projected future availability period  yes. \n" +
    "Keyword Velocity definition based on actual points completed, which is typically an average of all previous sprints period \n" +
    " \n" +
    "42:18 I caution that because you want to go into this in this order of identifying what are we actually going to build and what is included in this system, it could cause some rework but i've had where students just jump right in. \n" +
    "42:37 They least brownsville will introduce during sprint one. \n" +
    "42:41 Then you have your sprint review sprint-retrospective and evaluation. \n" +
    "42:48 Then project execution sprint to stop for testing daily scrum code review. \n" +
    "42:56 we're going to do a code review on your code, so you want to make sure you use those best practices. \n" +
    "43:03 And when you're writing code. Keyword Scrum Master definition the master of scrum, who ensures the scrum framework is followed period  \n" +
    "43:06 project documentation, not as comprehensive, but there will be some documentation your project submission your sprint review number to your sprint-retrospective.\n" +
    "Keyword Potentially Shippable definition is the value delivered for the customer via the Product Backlog Items completed during a Sprint period keyword Product Increment definition is the sum of all the Product Backlog items completed during a Sprint and the value of the increments of all previous Sprints period   \n" +
    "43:20 and your peer evaluation. \n" +
    " \n" +
    " Unknown Speaker 54:56 would be like a little less. \n" +
    " \n" +
    " Dr. Sanethia Thomas (she/her) 55:00 resource. \n" +
    " \n" +
    " Unknown Speaker 55:02 yeah. \n" +
    " \n" +
    " Unknown Speaker 55:04 yeah. \n" +
    " \n" +
    " Mikayla Hill 55:36 Dr Thomas. \n" +
    " \n" +
    " Dr. Sanethia Thomas (she/her) 55:40 Okay who's talking. \n" +
    "55:42 Because it's so loud in here. \n" +
    " \n" +
    " Mikayla Hill 55:44 How it's me Michaela. \n" +
    " \n" +
    " Dr. Sanethia Thomas (she/her) 55:47 I still like barely. \n" +
    " \n" +
    " Mikayla Hill 55:51 i'll send a message on slack I sent a message in the chat. \n" +
    " \n" +
    " Dr. Sanethia Thomas (she/her) 55:55 Okay sounds good. \n" +
    "57:15 Yes. \n" +
    " \n" +
    " Unknown Speaker 57:36 Yes. \n" +
    " \n" +
    " Unknown Speaker 58:07 return. \n" +
    " \n" +
    " Dr. Sanethia Thomas (she/her) 58:15 Okay bye bye everybody that's awesome take care. \n" +
    " \n" +
    " \n" +
    " \n";
var string5= "hello keyword hi definition cool period \n"
"keyword hi definition no period \n"
"keyword hi definition si period \n"
"keyword hello definition no period\n";



describe("Test 1 for string1", function() {
   it("converts a string to flashcards", function() {
        var set1 = addon.parseIntoCardsFromAudio(string1);
        console.log(set1);
        expect(set1).to.have.deep.keys({"good " : "awesome "});
    });
});

describe("Test 2 for string2", function() {
    it("converts a string to flashcards", function() {
        var set1 = addon.parseIntoCardsFromAudio(string2);
        console.log(set1);
        expect(set1).to.have.deep.keys({"good " : "awesome period", "test " : "test passed", "another test that is awesome " : "this is the other test passing b4 88 times period"});
    });
});

describe("Test 3 for string1_2", function() {
    it("converts a string to flashcards", function() {
        var set1 = addon.parseIntoCardsFromAudio(string1_2);
        console.log(set1);
        expect(set1).to.have.deep.keys({"vocab2 word " : "def2 "});
    });
});
describe("Test 5 with shorter string", function() {
    it("converts a string to flashcards", function() {
        var set1 = addon.parseIntoCardsFromAudio(string_shorter);
        console.log(set1);
        expect(set1).to.have.deep.keys({"agile " : "a way to manage a project by breaking it up into several phases  "});
    });
});

describe("Test 6 ", function() {
    it("converts a string to flashcards", function() {
        var set1 = addon.parseIntoCardsFromAudio(string5);
        console.log(set1);
        expect(set1).to.have.deep.keys({"hi " : "cool "});
    });
});

