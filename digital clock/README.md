# Digital & Analog Clock Project
![image alt](https://github.com/PranavHendre02/Javascript_Project/blob/d4eca3b4bd776345ce01d54f35f6fb1e34378407/digital%20clock/Digital%20clock.png)

## 📌 Overview
This project is a visually appealing **Digital & Analog Clock** that displays the current time in both formats. The clock features:
- **A glowing 3D effect** using `box-shadow` and `text-shadow`.
- **Analog clock hands** (hour, minute, second) rotating based on real-time calculations.
- **A digital time display** in the format **HH:MM:SS** at the center.
- **Smooth animations** powered by JavaScript and CSS.

## 🛠️ Technologies Used
- **HTML**: Structure of the clock.
- **CSS**: Styling with `box-shadow`, `text-shadow`, and gradients to achieve a **3D effect**.
- **JavaScript**: Handles time calculations and updates the clock hands in real time.

## 🚀 Features
### 🔹 **Real-Time Analog Clock**
- The **hour, minute, and second hands rotate** based on the current time.
- **Manual calculations** are used to determine their rotation:
  - **Hour Hand Rotation:** `30 * hour + min / 2`
  - **Minute Hand Rotation:** `6 * minutes`
  - **Second Hand Rotation:** `6 * seconds`

### 🔹 **Glowing Digital Clock Display**
- **Displayed in HH:MM:SS format.**
- **Different colors for hours, minutes, and seconds.**
- Positioned at the center of the clock for easy readability.

### 🔹 **3D & Glow Effect**
- **Box shadow** gives depth to the clock body.
- **Text shadow** adds a glow effect to digital numbers.
- **Neon-colored hands** improve visibility.

## 🎨 Styling Highlights
- **Clock Face:** Uses `radial-gradient` for a smooth background effect.
- **Numbers:** Positioned using CSS `transform`.
- **Hands:** Different colors and glowing effects to enhance clarity.

## 📝 JavaScript Logic
- **`new Date()`** is used to fetch the current time.
- The rotation angles for each hand are calculated using:
  ```js
  let hrotation = 30 * hour + min / 2;
  let mrotation = min * 6;
  let srotation = sec * 6;
  ```
- The hands are updated every second using:
  ```js
  setInterval(() => {
    hour_hand.style.transform = `rotate(${hrotation}deg)`;
    min_hand.style.transform = `rotate(${mrotation}deg)`;
    sec_hand.style.transform = `rotate(${srotation}deg)`;
  }, 1000);
  ```

## 📂 File Structure
```
📁 Clock Project
│── index.html  (Clock structure)
│── style.css   (Clock design and effects)
│── script.js   (Time logic and animation)
```

## 📌 Future Enhancements
- **Custom Themes**: Option to change colors dynamically.
- **AM/PM Format**: Add 12-hour format support.
- **Date Display**: Show the current date below the clock.

---
✅ **A beautifully designed, real-time clock with an interactive digital & analog display!** Let me know if you have any suggestions or improvements!


