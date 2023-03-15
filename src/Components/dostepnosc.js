import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Dostepnosc = () => {
const [selectedMonth, setSelectedMonth] = useState(null);
const [selectedDay, setSelectedDay] = useState(null);
const [isDostepnoscVisible, setDostepnoscVisible] = useState(false);
const [isResetVisible, setResetVisible] = useState(false);

const handleMonthChange = (date) => {
setSelectedMonth(date);
};

const handleDayChange = (date) => {
setSelectedDay(date);
};

const renderMonthPicker = () => {
return (
<DatePicker
     selected={selectedMonth}
     onChange={handleMonthChange}
     dateFormat="MMMM yyyy"
     showMonthYearPicker
   />
);
};

const renderDayPicker = () => {
return (
<DatePicker
selected={selectedDay}
onChange={handleDayChange}
dateFormat="dd.MM.yyyy"
minDate={selectedMonth && new Date(selectedMonth.getFullYear(), selectedMonth.getMonth(), 1)}
maxDate={selectedMonth && new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() + 1, 0)}
/>
);
};

const handleDostepnoscClick = () => {
setDostepnoscVisible(true);
setResetVisible(true);
};

const handleResetClick = () => {
setSelectedMonth(null);
setSelectedDay(null);
setDostepnoscVisible(false);
setResetVisible(false);
};

return (
<div className="DostepnoscDiv">
<h2>Dostępność</h2>
<div className="DostepnoscUwaga">
<span class="material-symbols-outlined">error</span>
<p>Wybierz daty, aby zobaczyć dostępność i ceny w obiekcie</p>
</div>
<div className="OknoDostepnosci" style={{ display: isDostepnoscVisible ? 'block' : 'none' }}>
<div className="input-container">
<label>Wybierz miesiąc:</label>
{renderMonthPicker()}
</div>
{selectedMonth && (
<div className="input-container">
<label>Wybierz dzień:</label>
{renderDayPicker()}
</div>
)}
</div>
{isResetVisible ? (
<button className="DostepnoscReset" onClick={handleResetClick}>
Resetuj
</button>
) : (
<button className="DostepnoscData" onClick={handleDostepnoscClick}>
Wybierz date
</button>
)}
</div>
);
};

export default Dostepnosc;