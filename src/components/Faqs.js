import React, { useState } from 'react';

export const Faqs = ()=> {    
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    if (activeQuestion === index) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(index);
    }
  };

  const questions = [
    {
      question: 'How do I know if I need therapy?',
      answer:
        'The decision to seek treatment is a personal one. People seek therapy for a variety of reasons. You may feel that something is off course, but you are not quite sure what it is. Or you may notice a change in your sleep routine, or your appetite, or you may have experienced trauma. If these situations are causing sever impairments in your day-to-day functioning, it be a tell tale signs that you may need to explore therapy.  It\'s important to remember that reaching out is not a sign of weakness, but a significant step toward the path of self-care. And the sooner you seek help, the faster you can get back on track.',
    },
    {
      question: 'Does therapy work?',
      answer:
        'That is a question only you can answer for yourself.  However, hundreds of studies have found that psychotherapy helps people make positive changes in their lives.',
    },
    {
      question: 'Is psychotherapy different from counselling?',
      answer:
        'Yes, psychotherapy is different from counselling. Many use the term interchangeably. Counselling is more about the counsellor giving you advise on a particular issue, whereas, psychotherapy is about, working a with a therapist, talking through your issues, focusing on your thoughts and your behaviours. It is mainly changing those negative behaviours. Also keep in mind that therapy can include counselling on specific issues that arise during your therapy session. Many clinicians are trained in both counselling and therapy.',
    },
    {
      question: 'Is psychotherapy covered by OHIP?',
      answer:
        'Psychotherapy is not covered by OHIP or the Ontario Health Insurance Plan. All Psychotherapists are independent professionals who must be paid directly by you. However, our fees may be covered by your personal healthcare plan through your workplace, or a separate health insurance plan that covers psychotherapy.',
    },
    {
      question: 'How much does psychotherapy cost?',
      answer:
        'Each therapist has their own fee structure ranging from $100-$ 180.00 per session. Be sure to ask your therapist about fees prior to beginning your sessions so you know what to expect.',
    },
    {
      question: 'Do you provide online therapy sessions?',
      answer:
        'Yes, at this time I am only providing cyber-therapy otherwise know as online therapy.',
    },
    {
      question: 'Do you still have questions?',
      answer:
        'I am here to help.\nSend me an email at mrodney.dlt@gmail.com  or visit my contact page.\nAdditionally, you check out the articles page or blogs for further information that might help answer your questions about therapy.',
    },
  ];

  return (
    <section className="faq-page" id="faqs">
      <h1 className="faq-header">Frequently Asked Questions</h1>
      {questions.map((q, index) => (
        <div key={index} className="question-card">
          <div className="question-card-header" onClick={() => toggleQuestion(index)}>
            <div className="question-wrapper">
              <div className="question-text">{q.question}</div>
              <div className={`icon ${activeQuestion === index ? 'minus' : ''}`}/>
            </div>
          </div>
          {activeQuestion === index && (
            <div className="question-card-body">{q.answer}</div>
          )}
        </div>
      ))}
    </section>
  );
}

export default Faqs;
