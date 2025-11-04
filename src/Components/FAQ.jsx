import { useState } from "react";
import "../Styles/FAQ.css"

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "🐰.." : " 🦋.."} {question}
      </button>
      {isOpen && <div>{answer}</div>}
    </div>
  );
};

const FAQList = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "I provide a range of services, including product design, web development, and user experience (UX) consulting, tailored to meet your project needs."
    },
    {
      question: "What is your design process?",
      answer: "My design process involves understanding client goals, conducting user research, creating wireframes and prototypes, and iterating based on feedback to ensure the final product meets user needs."
    },
    {
      question: "How do you handle project timelines?",
      answer: "I work closely with clients to establish clear timelines and milestones, ensuring that projects stay on track and are delivered on time."
    },
    {
      question: "Can you work with existing teams?",
      answer: "Absolutely! I can collaborate seamlessly with existing teams, integrating into your workflow to enhance design and development efforts."
    },
    {
      question: "What tools do you use?",
      answer: "I utilize various tools for design and development, including Figma, Flutterflow, HTML, CSS, JavaScript, and React, ensuring high-quality outcomes for all projects."
    }
  ];

  return (
    <div className='questions'>
      <h1>Frequently Asked <br /><span className="Qest">Questions</span></h1>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQList;
