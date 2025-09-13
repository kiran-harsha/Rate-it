import React, {useState} from 'react'
import { Button } from '@mui/base/Button';
import { SeriesCard } from './SeriesCard';
import { AddNewSeriesModal } from './AddNewSeriesModal';


export const SeriesTracker = () => {
    const [series, setSeries] = useState([]);
    const [nextId, setNextId] = useState(1);
console.log("Series:", series);
    const [isModalOpen, setIsModalOpen] = useState(false);

const addSeries = (newSeries) => {

    setSeries((prevSeries) => [...prevSeries, newSeries]);
    setNextId((prevId) => prevId + 1);
}


      const deleteSeries = (seriesToDelete) => {
        setSeries((prevSeries) =>
          prevSeries.filter((item) => item.id !== seriesToDelete)
        );
      };

      const editSeries = (updatedSeries) => {
        setSeries((prevSeries) =>
          prevSeries.map((item) =>
            item.id === updatedSeries.id ? updatedSeries : item
          )
        );
      };
      
      
      
    const handleAddReviewClick = () => {
        setIsModalOpen(true);
        }


    return (
        <div>
          <Button
          onClick={handleAddReviewClick}>Add new review</Button>
          <h2>Series Tracker</h2>
          {series.map((item) => (
            <SeriesCard key={item.id} {...item} deleteSeries={deleteSeries} onEdit={editSeries}/>
          ))}
          <AddNewSeriesModal 
          id={nextId}
          open = {isModalOpen}
          onClose={() => setIsModalOpen(false)}
          addToSeries = {addSeries}/>
        </div>
      );
      
}
