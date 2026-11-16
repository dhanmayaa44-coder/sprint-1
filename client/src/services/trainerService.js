
import axios from "axios";

const API_URL = "http://localhost:5000/api/trainers";

// Get all trainers
export const getTrainers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Get trainer by ID
export const getTrainerById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// Create trainer
export const createTrainer = async (trainerData) => {
  const response = await axios.post(API_URL, trainerData);
  return response.data;
};

// Update trainer
export const updateTrainer = async (id, trainerData) => {
  const response = await axios.put(`${API_URL}/${id}`, trainerData);
  return response.data;
};

// Delete trainer
export const deleteTrainer = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
