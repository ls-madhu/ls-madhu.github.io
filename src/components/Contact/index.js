import React, { useEffect, useState } from "react";
import axios from "axios";

import SectionContainer from "../shared/SectionContainer";
import SectionHeading from "../shared/SectionHeading";
import { Form } from "./Contact.styles";
import Notification from "../shared/Notification";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showNotification, setShowNotification] = useState(false);
  const [notificationType, setNotificationType] = useState(null);
  const [notificationMessage, setNotificationMessage] = useState(null);

  useEffect(() => {
    let timeoutId;
    if (showNotification) {
      timeoutId = setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [showNotification]);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: "https://formspree.io/f/mgedbnbe",
      method: "post",
      headers: {
        Accept: "application/json",
      },
      data: {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
    })
      .then((response) => {
        if (response.data.ok) {
          setNotificationMessage("Form submission successful.");
          setNotificationType("success");
          setShowNotification(true);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        } else {
          setNotificationMessage(
            "Something went wrong. Please try again later."
          );
          setNotificationType("error");
          setShowNotification(true);
        }
      })
      .catch((error) => {
        setNotificationMessage("Something went wrong. Please try again later.");
        setNotificationType("error");
        setShowNotification(true);
      });
  };

  return (
    <SectionContainer>
      <SectionHeading>Contact</SectionHeading>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            required
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            required
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="message">
          Message
          <textarea
            id="message"
            required
            rows="6"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </label>
        <button type="submit">Submit</button>
      </Form>
      {showNotification && (
        <Notification type={notificationType}>
          {notificationMessage}
        </Notification>
      )}
    </SectionContainer>
  );
};

export default Contact;
