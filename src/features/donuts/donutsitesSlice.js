import { DONUTSITES } from "../../app/shared/DONUTSITES";


export const selectAllDonutsites = () => {
  return DONUTSITES;
};

export const selectDonutsiteById = (id) => {
  return DONUTSITES.find((donutsite) => donutsite.id === parseInt(id));
};

export const selectFeaturedDonutsite = () => {
  return DONUTSITES.find((donutsite) => donutsite.featured);
};