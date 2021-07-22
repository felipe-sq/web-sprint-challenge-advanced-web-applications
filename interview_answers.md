# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.


1. Explain what a token is used for.
A token is used for authenticating users or for creating a secured connection with an API. This helps to keep inner, protected pages separate from the public eye in cases where they contain sensitive or private information (like passwords, addresses, etc.).

2. What steps can you take in your web apps to keep your data secure?
The most important steps are using proper and secure authentication methods, and not using or writing code which keeps non-secure avenues open, such as innerHTML.

3. Describe how web servers work.
Web servers are designed to answer and process incoming user requests, often matching these requests against stored files on a database. It's a way for users to keep large amounts of data in centralized locations while making it faster to access said data. By using web servers, we are able to scale Apps quickly because the data capabilites are not limited to a local storage solution which may or may not run out of space or slow down depending on the amount of requests or web traffic.

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

The HTTP methods that can be mapped are POST (Create), GET (Read), PUT/PATCH (Update) and DELETE (D). 