🌟 Excited to Share: NexTrade - An E-Commerce Project 🌟
Built Using: React, Firebase, and Redux Toolkit
________________________________________
Learnings :-

React :

Component-Based Architecture: 
# Enables creation of reusable, modular components for features like product cards, cart items, and dashboards.
# Smooth Navigation: Ensures seamless transitions between pages like product details, cart page, and dashboards.

Efficient Component Management:
# Each product card is a standalone component managing its own state and appearance.
# Efficiently updates and renders only the parts of the UI that need changes.

Firebase :

# Backend-as-a-Service (BaaS): Firebase serves as the serverless backend for our application, offering secure and real-time functionalities.

Authentication
# Manages secure login and signup for users and administrators.
# Supports email/password authentication for better accessibility.

Firestore Database
# Stores product data, user details, and order information.
# Enables real-time synchronization of products, users, orders, and admin edits (e.g., add, remove, edit).

Cloud Functions
# Automates inventory updates when an order is placed, handling details like user ID, price, address, name, and category without manual intervention.

Redux Toolkit (RTK) :
# It is responsible for State Management and Data Flow across the application 
# Centralized store simplifies state management across the application.
# Modular pieces of state logic ensure easier maintenance.
CRUD Operations:
# Handles adding/removing products, updating quantities, etc.
# Ensures all actions follow a structured flow: action => reducer => updated state.
________________________________________
Functions :
# Users can search for products via categories (e.g., books or laptops) in the category section or by using the search bar.
# Users can add or remove products from the cart.
# Users can see product information by clicking on the image .
# In cart page it displays detailed information (price, category, quantity, discount, total amount) with an option to proceed to buy.
# Users have personalized dashboards to view their order summaries.

# Protected Routes : Restricts access to certain pages, ensuring only authorized users (admins) can perform CRUD operations.
At Admin Dashboard : 
# Add, edit, and delete products.
# Access information such as total products, orders, and users.
