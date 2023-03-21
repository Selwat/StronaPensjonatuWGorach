import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Dostepnosc = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isDostepnoscVisible, setDostepnoscVisible] = useState(false);
  const [isResetVisible, setResetVisible] = useState(false);
  const [isWymeldowanieVisible, setWymeldowanieVisible] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const renderDatePicker = () => {
    return (
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd.MM.yyyy"
        minDate={new Date()}
      />
    );
  };

  const handleDostepnoscClick = () => {
    setDostepnoscVisible(true);
    setResetVisible(true);
  };

  const handleResetClick = () => {
    setSelectedDate(null);
    setDostepnoscVisible(false);
    setResetVisible(false);
    setWymeldowanieVisible(false);
  };
  /////////////////////////
  const handleWymeldujClick = () => {
    setWymeldowanieVisible(true);
    setResetVisible(true);
  };




  return (
    <div className="DostepnoscDiv">
      <h2>Dostępność</h2>
      <div className="DostepnoscUwaga">
        <span class="material-symbols-outlined">error</span>
        <p>Wybierz daty, aby zobaczyć dostępność i ceny w obiekcie</p>
      </div>

      <div className="OknoWyboruDaty">

        <div className="OknoDostepnosci" style={{ display: isDostepnoscVisible ? 'block' : 'none' }}>
          <div className="input-container">
            <label>Wybierz datę zameldowania:</label>
            {renderDatePicker()}
          </div>
        </div>

        <div className="OknoWymeldowania" style={{ display: isWymeldowanieVisible ? 'block' : 'none' }}>
          <div className="input-container">
            <label>Wybierz datę wymeldowania:</label>
            {renderDatePicker()}
          </div>
        </div>
        
        {isDostepnoscVisible ? (
          <button className="DostepnoscReset" onClick={handleResetClick}>Resetuj</button>
        ) : (
          <button className="DostepnoscData" onClick={handleDostepnoscClick}>Zameldowanie</button>
          
        )}
        {isWymeldowanieVisible ? '' : (
          <button className="WymeldowanieData"  onClick={handleWymeldujClick}>Wymeldowanie</button>
        )}
        
      </div>
    </div>
  );
};

export default Dostepnosc;
