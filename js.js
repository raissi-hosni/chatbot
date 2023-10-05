
const questionAnswerPairs = [
   {
     ques: ["Hi", "hello", "Hi there", "hey"],
     answ: "Hello! How can I assist you today?"
   },
   {
     ques: "how are you",
     answ: "I'm just a computer program, so I don't have feelings, but I'm here to help. How can I assist you?"
   },
   {
     ques: "are you ok",
     answ: "I don't have physical sensations, but I'm ready to assist you with any questions or tasks."
   },
   {
     ques: ["what happened", "what's going on"],
     answ: "I'm here to provide information and answer your questions. How can I assist you today?"
   },
   {
     ques: ["how was your day", "how are you doing today"],
     answ: "I'm always ready to assist you, 24/7. What can I help you with?"
   },
   {
     ques: "how old are you",
     answ: "I'm a computer program, so I don't have an age."
   },
   {
     ques: "tell me a joke",
     answ: "Sure, here's one: Why did the computer keep freezing? Because it left its Windows open!"
   },
   {
     ques: "what's the meaning of life",
     answ: "The meaning of life is a philosophical question that varies from person to person. What do you think it is?"
   },
   {
     ques: ["who is your creator", "who made you"],
     answ: "I was created by a team of developers and engineers."
   },
   {
     ques: "can you recommend a movie",
     answ: "Certainly! What genre are you in the mood for, and do you have any preferences?"
   }, {
      ques: "What is the capital of France?",
      answ: "The capital of France is Paris."
    },
    {
      ques: "Explain the concept of artificial intelligence.",
      answ: "Artificial intelligence, or AI, refers to the development of computer systems that can perform tasks that typically require human intelligence, such as learning, problem-solving, and decision-making."
    },
    {
      ques: "How do I bake a chocolate cake?",
      answ: "To bake a chocolate cake, you'll need ingredients like flour, sugar, cocoa powder, eggs, and milk. Mix them together, bake in a preheated oven, and follow a recipe for specific instructions."
    },
    {
      ques: "What's the difference between a virus and a bacteria?",
      answ: "Viruses are smaller than bacteria and are not considered living organisms. Bacteria are single-celled microorganisms that can live independently."
    },
    {
      ques: "Who won the Nobel Prize in Physics in 2021?",
      answ: "The Nobel Prize in Physics for 2021 was awarded to Syukuro Manabe and Klaus Hasselmann for their work in climate science."
    },
    {
      ques: "What's the largest planet in our solar system?",
      answ: "The largest planet in our solar system is Jupiter."
    },
    {
      ques: "How does a microwave oven work?",
      answ: "A microwave oven heats food by emitting microwave radiation that excites water molecules within the food, generating heat through friction."
    },
    {
      ques: "Can you recommend a good book to read?",
      answ: "There are many great books to choose from, depending on your interests. What genre or topic are you interested in?"
    },
    {
      ques: "What's the fastest land animal?",
      answ: "The cheetah is the fastest land animal, capable of running at speeds of up to 60-70 miles per hour."
    },
    {
      ques: "How do I change my Wi-Fi password?",
      answ: "To change your Wi-Fi password, you'll need to log into your router's settings through a web browser and locate the security settings. The process may vary depending on your router model."
    },{
      ques: "What's the difference between RAM and ROM?",
      answ: "RAM (Random Access Memory) is temporary memory that stores data while the computer is running. ROM (Read-Only Memory) contains permanent data and instructions that are not erased when the computer is turned off."
    },
    {
      ques: "How does a car engine work?",
      answ: "A car engine works by igniting a mixture of fuel and air in a cylinder, causing the piston to move. This mechanical energy is then transmitted to the wheels to propel the car forward."
    },
    {
      ques: "Who wrote the play 'Romeo and Juliet'?",
      answ: "The play 'Romeo and Juliet' was written by William Shakespeare."
    },
    {
      ques: "What is the formula for calculating the area of a circle?",
      answ: "The formula for calculating the area of a circle is A = πr^2, where A is the area and r is the radius of the circle."
    },
    {
      ques: "What is the greenhouse effect?",
      answ: "The greenhouse effect is the process by which certain gases in Earth's atmosphere trap heat from the sun, leading to an increase in the planet's temperature. It is essential for maintaining a suitable climate on Earth."
    },
    {
      ques: "What are the primary colors?",
      answ: "The primary colors are red, blue, and yellow. They are fundamental colors that can be mixed to create other colors."
    },
    {
      ques: "How do I take a screenshot on Windows?",
      answ: "To take a screenshot on Windows, you can press the 'PrtScn' (Print Screen) key to capture the entire screen or use 'Alt + PrtScn' to capture only the active window. You can then paste the screenshot into an image editing program or document."
    },
    {
      ques: "What is the process of photosynthesis?",
      answ: "Photosynthesis is the process by which plants convert sunlight, carbon dioxide, and water into glucose (sugar) and oxygen using chlorophyll and energy from the sun."
    },
    {
      ques: "Who is the current Prime Minister of the United Kingdom?",
      answ: "As of my last update in September 2021, the Prime Minister of the United Kingdom was Boris Johnson. Please verify for the most up-to-date information."
    },
    {
      ques: "What's the tallest mountain in the world?",
      answ: "The tallest mountain in the world is Mount Everest, which is part of the Himalayas and reaches an elevation of 29,032 feet (8,849 meters)."
    }];
 

 
 function chek(){
    let message=document.querySelector(".input_message").value;
    let t_area=document.querySelector(".messages");
    let rep=test(message.toLowerCase());
    
    var text_box=document.createElement("p");
    text_box.id='block_message'
    text_box.style.width="200px";
    text_box.style.color="black";
    text_box.style.backgroundColor="blue";
    text_box.style.borderRadius="5px";
    text_box.style.padding="5px";
    text_box.style.wordWrap="break-word";
    text_box.style.alignSelf="end"
    text_box.style.fontSize="15px";
    text_box.style.fontWeight="bold";

    text_box.innerText=message;
    t_area.appendChild(text_box);
    document.querySelector(".input_message").value="";


   
  
   var text_box2=document.createElement("p");
    text_box2.id='block_message2'
    text_box2.style.width="200px";
    text_box2.style.color="black";
    text_box2.style.backgroundColor="#C9F7F9";
    text_box2.style.borderRadius="5px";
    text_box2.style.padding="5px";
    text_box2.style.wordWrap="break-word";
    text_box2.style.alignSelf="start"
    text_box2.style.fontSize="15px";
    text_box2.style.fontWeight="bold";

    text_box2.innerText=rep;
    t_area.appendChild(text_box2);
    t_area.scrollTop = t_area.scrollHeight;
    

   
 }
 function test(k){
   const input = k.toLowerCase();
  
  for (const i of questionAnswerPairs) {
    const questions = Array.isArray(i.ques) ? i.ques : [i.ques];

    for (const question of questions) {
      if (input.includes(question)) {
        return i.answ;
      }
    }
  }

  return "I'm not sure how to respond to that.";
 }
 