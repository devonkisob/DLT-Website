import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const blogData = [
  {
    id: 1,
    title: "Merry Christmas",
    content: <p>As Christmas approaches, some of us may not be feeling so hopeful, and less hopeful for the future.<br></br><br></br>
    
    We have all felt the pinch of inflation, high grocery bills, and other rising living costs. But this is just a season, and seasons don’t last forever.  The Christmas season comes with a message of hope. Hope can strengthen us in our darkest hours and desperate moments. It keeps us fighting and believing that things will work out and to see that there is a light at the end of the tunnel.  Here are few things to keep in mind while you wait for change to come, and to keep you hopeful: <br></br><br></br>
    
    <b>Think Yourself Happy-</b> You can inspire hope from within. We all from time to time think about things that we would like, but do not have, what is missing or what is wrong in our lives, and we sometimes despair over it. This thought pattern can put us in a downward spiral into a place of hopelessness, depression and anxiety. So, be grateful for all the love that is surrounding you from family and friends. Additionally, when we think about the positives, it releases the serotonin chemical in our brain that is associated with serenity, hopefulness in moods and positive emotions. <br></br><br></br>
    
    <b>Think of Others- </b> We can inspire hope in others with words of encouragement and affirmations. Putting the focus on others not only brings a smile to their faces, but it will make you feel good and less self-focused. We can make Christmas special for someone else if we extend ourselves and be intentional about reaching out to others. So, the next time you see someone who is less fortunate than you, give them a smile, show care and concern by asking how they are doing. Ask them if they would like a hot drink, or a meal. Be the answer to their prayers.<br></br><br></br>
    
    <b>Refuse to Give Up-</b> The holiday season can evoke all kinds of emotions. For some people, it can be stressful, sadness, and for others, it can be anxiety provoking. While for some, it can give them a sense of wonder and leaving them feeling optimistic.<br></br><br></br>
    No matter what you are facing this holiday season, don’t give up hope. We can resist the urge to give up by staying focus on your priorities and following through with these few suggestions.<br></br><br></br>
    
    <b>Take Care of Yourself-</b> This is the most fundamental of all.  Putting your emotional and physical health first, is the first step in self-care. Here are a few ways to achieve this over the holidays, take a walk, meditate, do a puzzle with family, read a good book, and dance if that is your thing.<br></br><br></br>
    As they say on an airplane, "Put your own oxygen mask on first”.<br></br><br></br>
    I hope you find these few words helpful! <br></br><br></br>
    I would like to thank you for your continued trust in Doing Life Together Counselling Services. It is my privilege to walk the path of healing and hope with you.
    </p>,
    date: "December 25, 2022"
  }
  /*{
    id: 2,
    title: "Second Blog Title",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    date: "April 15, 2023"
  },*/
  // Add more blogs as needed
];

export const Blogs = () => {
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0);

  const handleLeftArrowClick = () => {
    if (currentBlogIndex > 0) {
      setCurrentBlogIndex(currentBlogIndex - 1);
    }
  };

  const handleRightArrowClick = () => {
    if (currentBlogIndex < blogData.length - 1) {
      setCurrentBlogIndex(currentBlogIndex + 1);
    }
  };

  const currentBlog = blogData[currentBlogIndex];

  return (
    <section className="blogs" id="blog">
        <Container className="blog-container">
            <h1 className="blog-header">Blog</h1>
        <Row>
            <Col>
            <h1 className="blog-title">{currentBlog.title}</h1>
            <p className="blog-text">{currentBlog.content}</p>
            <p>{currentBlog.date}</p>
            </Col>
        </Row>
        <Row>
            <Col>
            <FaArrowLeft
                onClick={handleLeftArrowClick}
                size={24}
                className="arrow"
            />
            <FaArrowRight
                onClick={handleRightArrowClick}
                size={24}
                className="arrow"
            />
            </Col>
        </Row>
        </Container>
    </section>
  );
};