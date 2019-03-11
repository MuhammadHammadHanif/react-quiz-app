const quiz = [
    {
        HTML :  {
                "Quiz-1" : 
                          [
                                  "12345html",
                                {
                                        ques:'Select type of Lists in HTML ?',
                                        isMultiple:true,
                                        options:['<ol>','<ul>','<dt>','<dl>'],
                                        correctAnswer : ['<ol>','<ul>','<dl>']
                                },
                                {
                                        ques:'Apart from <b> tag, what other tag makes text bold ?',
                                        isMultiple:false,
                                        options:['<fat>','<strong>','<black>','<emp>'],
                                        correctAnswer : '<strong>'
                                },
                                
                                {
                                        ques:'Select the values of <input /> types attribute ?',
                                        isMultiple:true,
                                        options:['button','checkbox','address','image'],
                                        correctAnswer : ['button','checkbox','image']
                                },
                                {
                                        ques:'What are the types of Web Storage in HTML5?',
                                        isMultiple:true,
                                        options:['Session Storage','Web Storage', 'Local Storage', 'System Storage'],
                                        correctAnswer : ['Session Storage','Local Storage']
                                },
                                {
                                        ques:'HTML is a Markup Language ?',
                                        isMultiple:false,
                                        options:['true','false'],
                                        correctAnswer : 'true'
                                }
                           ],
                "Quiz-2" : [],
                "Quiz-3" : [],
                "Quiz-4" : [],
                "Quiz-5" : []
                },
        CSS :  {
                "Quiz-1" : 
                          [
                                  "12345css",
                                {
                                        ques:'What is the correct HTML for referring to an external style sheet ?',
                                        isMultiple:false,
                                        options:['<stylesheet>mystyle.css</stylesheet />','<style src="mystyle.css" />','<link rel="stylesheet" type="text/css" href="mystyle.css">'],
                                        correctAnswer : '<link rel="stylesheet" type="text/css" href="mystyle.css">'
                                },
                                {
                                        ques:'Select the multiple way to add CSS to HTML file ?',
                                        isMultiple:true,
                                        options:['Inline','Internal','Both of the Above','External'],
                                        correctAnswer : ['Inline','Internal','External']
                                },
                                
                                {
                                        ques:'Which HTML attribute is used to define inline styles ?',
                                        isMultiple:false,
                                        options:['font','class','styles','style'],
                                        correctAnswer : 'style'
                                },
                                {
                                        ques:'What are the Correct statements for CSS ?',
                                        isMultiple:true,
                                        options:['CSS is a language used to detail the presentation of a web page\'s markup language','Not Supported by Modern Browsers', ' it allows the separation of document content (written in HTML or a similar markup language) from document presentation (written in CSS)', 'By making one change to your website\'s CSS style sheet, you can automatically make it to every page of your website'],
                                        correctAnswer : ['CSS is a language used to detail the presentation of a web page\'s markup language',' it allows the separation of document content (written in HTML or a similar markup language) from document presentation (written in CSS)','By making one change to your website\'s CSS style sheet, you can automatically make it to every page of your website']
                                },
                                {
                                        ques:'How do you display hyperlinks without an underline ?',
                                        isMultiple:false,
                                        options:['a {text-decoration:no underline}','a {decoration:no underline}','a {text-decoration:none}','a {underline:none}'],
                                        correctAnswer : 'a {text-decoration:none}'
                                }
                           ],
                "Quiz-2" : [],
                "Quiz-3" : [],
                "Quiz-4" : [],
                "Quiz-5" : []
                },
        CSHARP :  {
                "Quiz-1" : 
                          [
                                  "12345csharp",
                                {
                                        ques:'Which of the following is true about C# structures vs C# classes?',
                                        isMultiple:true,
                                        options:['Classes are reference types and structs are value types.','Structures do not support inheritance.', 'Structures cannot have default constructor','Class cannot have default constructor'],
                                        correctAnswer : ['Classes are reference types and structs are value types.','Structures do not support inheritance.','Structures cannot have default constructor']
                                },
                                {
                                        ques:'Which of the following converts a type to a Boolean value, where possible in C# ?',
                                        isMultiple:false,
                                        options:['ToBoolean','ToSingle','ToChar','ToDateTime'],
                                        correctAnswer : 'ToBoolean'
                                },
                                {
                                        ques:'Which of the following access specifier in C# allows a child class to access the member variables and member functions of its base class?',
                                        isMultiple:false,
                                        options:['Public','Private','Protected','Internal'],
                                        correctAnswer : 'Protected'
                                },
                                
                                {
                                        ques:'Which of the following converts a type to an unsigned int type in C# ?',
                                        isMultiple:false,
                                        options:['ToType','ToUInt16','ToSingle','ToString'],
                                        correctAnswer : 'ToUInt16'
                                },
                                {
                                        ques:'The conditional logical operators can be overloaded ?',
                                        isMultiple:false,
                                        options:['true','false'],
                                        correctAnswer : 'false'
                                }
                           ],
                "Quiz-2" : [],
                "Quiz-3" : [],
                "Quiz-4" : [],
                "Quiz-5" : []
                },
        JAVASCRIPT :  {
                "Quiz-1" : 
                          [
                                  "12345javascript",
                                  {
                                        ques:'JavaScript can be written ?',
                                        isMultiple:true,
                                        options:['directly into JS file and included into HTML','directly on the Server Script','directly into HTML pages','None of these'],
                                        correctAnswer : ['directly into JS file and included into HTML','directly into HTML pages']
                                },
                                {
                                        ques:'Javascript is _________ language ?',
                                        isMultiple:false,
                                        options:['Scripting','Programming', 'Automation','Application'],
                                        correctAnswer : 'Scripting'
                                },
                                {
                                        ques:'Why JavaScript is called as Lightweight Programming Language ?',
                                        isMultiple:false,
                                        options:['because JS can provide programming functionality inside but up to certain extend.','because we can add programming functionality inside JS','because JS is client side scripting','because JS is available free of cost.'],
                                        correctAnswer : 'because JS can provide programming functionality inside but up to certain extend.'
                                },
                                {
                                        ques:' JavaScript is also called as _____________ ?',
                                        isMultiple:true,
                                        options:['Browser Side Scripting Language','Client Side Scripting Language','None of These','Server Side Scripting Language'],
                                        correctAnswer : ['Browser Side Scripting Language','Client Side Scripting Language']
                                },
                                {
                                        ques:'State the correct place of JS Code inside HTML ?',
                                        isMultiple:false,
                                        options:['Inside Body','Inside Single JavaScript File','Inside Head','All of above'],
                                        correctAnswer : 'All of above'
                                }
                           ],
                "Quiz-2" : [],
                "Quiz-3" : [],
                "Quiz-4" : [],
                "Quiz-5" : []
                },
        "DATA STRUCTURE" :  {
                "Quiz-1" : 
                          [
                                  "12345datastructure",
                                  {
                                        ques:'Stack in Data Structure is ___________. ?',
                                        isMultiple:false,
                                        options:['LIFO','LILO','FIFO','None of these'],
                                        correctAnswer : 'LIFO'
                                },
                                {
                                        ques:'In the stack process of inserting an element in the stack is called as ___________ ?',
                                        isMultiple:false,
                                        options:['Evaluation','Pop', 'Push','Create'],
                                        correctAnswer : 'Push'
                                },
                                {
                                        ques:'Process of Removing element from the stack is called as __________ ?',
                                        isMultiple:false,
                                        options:['Postfix Expression','Pop', 'Push','Create'],
                                        correctAnswer : 'Pop'
                                },
                                {
                                        ques:'In the stack, If user try to remove element from the empty stack then it called as ___________ ?',
                                        isMultiple:false,
                                        options:['Overflow of Stack','Underflow of Stack','Garbage Collection','Empty Collection'],
                                        correctAnswer : 'Underflow of Stack'
                                },
                                {
                                        ques:'User push 1 element in the stack having already five elements and having stack size as 5 then stack becomes ___________ ?',
                                        isMultiple:false,
                                        options:['Overflow','Underflow','Crash'],
                                        correctAnswer : 'Overflow'
                                }
                           ],
                "Quiz-2" : [],
                "Quiz-3" : [],
                "Quiz-4" : [],
                "Quiz-5" : []
                }       
    }
 ];

// var quiz = [
//     {
//         HTML :  {
//             Test : 
//                     [
//                      {key : 'test1',Questions:[{Question : 'Hello1',ProposedAnswer:['hello11','hello12','hello13'],correctAnswer:['hello11','hello13']}]},
//                      {key : 'test2',Questions:[{Question : 'Hello2',ProposedAnswer:['hello21','hello22','hello23'],correctAnswer:['hello21']}]},
//                      {key : 'test3',Questions:[{Question : 'Hello3',ProposedAnswer:['hello31','hello32','hello33'],correctAnswer:['hello31','hello33']}]}
//                     ]
//                 }
//     }
// ];

export default quiz;