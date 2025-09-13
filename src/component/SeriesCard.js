import React, { useState } from "react";
import Card from "@mui/material/Card";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/base";
import { SeriesModal } from "./SeriesModal";

export const SeriesCard = ({ id, name, rating, deleteSeries, onEdit }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    deleteSeries(id);
  };

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <h2>{name}</h2>
        <p>Rating: {rating} / 5</p>
        <Button onClick={handleEdit}>
          <EditIcon />
        </Button>
        <Button onClick={handleDelete}>
          <DeleteIcon />
        </Button>
        <SeriesModal
          id={id}
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          addToSeries={onEdit}
        />
      </Card>
    </div>
  );
};
