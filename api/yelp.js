import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer mDLEmIYSviqBkQQeahi351VieUjj2oRJ8m7anAlpqXBc4ad72oUoGl5RT_JzL9ib6OesOB_gRJTMxPUcE28zMkrVTR0cEX00z5blG0V9XdmMDIoyqcQ7w39BjyvnZHYx",
  },
});
