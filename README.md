
# Expense Tracker  

A web application for tracking expenses that allows users to manage their finances effectively. Users can add, edit, and delete expenses, view summaries, and ensure they stay within their wallet balance.  

## Features  

1. **Wallet Balance Management:**  
   - Default wallet balance set to 5000.  
   - Option to increase wallet balance.  
   - Alert when trying to spend more than the available balance.  

2. **Expense Management:**  
   - Add expenses with title, amount, category, and date.  
   - Edit existing expenses.  
   - Delete expenses.  
   - Wallet balance updates dynamically based on expenses.  

3. **Data Persistence:**  
   - Persist wallet balance and expenses using `localStorage` for page refresh retention.  

4. **Expense Summaries:**  
   - View categorized summaries via a pie chart.  
   - Expense trends displayed in a bar chart categorized by spend types.  

5. **Responsive Design:**  
   - Fully responsive for desktop, tablet, and mobile views.  

## Technologies  

- **Frontend:** React.JS, HTML, CSS, JavaScript  
- **Libraries Used:**  
  - [Recharts](https://recharts.org/) for pie and bar charts.  
  - [React-Modal](https://github.com/reactjs/react-modal) for modal components.  
  - [Notistack](https://iamhosseindhv.com/notistack) for alert notifications.  
  - [React-Icons](https://react-icons.github.io/react-icons/) for icons.  

## Installation  

1. **Clone the Repository:**  
   ```bash  
   git clone https://github.com/your-username/expense-tracker.git  
   cd expense-tracker  
   ```  

2. **Install Dependencies:**  
   ```bash  
   npm install  
   ```  

3. **Run the Application Locally:**  
   ```bash  
   npm start  
   ```  

4. **Build for Production:**  
   ```bash  
   npm run build  
   ```  

## Deployment  

This project has been deployed to Vercel. You can view it live at:  
[Live Demo](https://expensetraker-beryl.vercel.app)  

## Application Structure  

- **Components:** Reusable components for UI elements such as forms, modals, and charts.  
- **State Management:** Managed using React hooks and `localStorage`.  
- **Styling:** Custom CSS for all components to ensure responsiveness and design consistency.  

## Usage Instructions  

1. **Adding Expenses:**  
   - Use the "Add Expense" button to open a form for entering expense details.  
   - Fields: Title, Amount, Category, Date (all required).  
   - Wallet balance updates upon successful submission.  

2. **Adding Income:**  
   - Use the "Add Income" button to increase wallet balance.  

3. **Expense List:**  
   - View all expenses in a list format.  
   - Options to edit or delete expenses.  

4. **Expense Summary:**  
   - Pie chart displaying total expenses by category.  

5. **Expense Trends:**  
   - Bar chart showing spending trends based on categories.  

6. **Responsive Design:**  
   - Works seamlessly on desktop, tablet, and mobile devices.  

## Key Features Demonstrated  

- **Charts:** Implemented using Recharts for intuitive data visualization.  
- **Modals:** Integrated React-Modal for forms and edits.  
- **Notifications:** Added alerts for actions (e.g., insufficient balance) using Notistack.  
- **Custom CSS:** Created responsive and visually appealing layouts without external CSS libraries.  

## Future Enhancements  

- Add filters for viewing expenses by date range.  
- Support for multiple wallet accounts.  
- Advanced analytics with additional chart types.  

## Project Demo  

Access the live application here: [Expense Tracker](https://expensetraker-beryl.vercel.app).  
