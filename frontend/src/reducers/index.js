import { combineReducers } from 'redux';

const defaultState = [
  { id: "c1", title: 'Intro to React', author: 'Wes Bos', type: 'videoSeries', url: 'https://reactforbeginners.com/', tags: ['react'], rating: 4.1, featured: true},
  { id: "c2", title: 'Modern React with Redux', author: 'Stephen Grider', type: 'videoSeries', url: 'https://www.udemy.com/react-redux/', tags: ['react', 'redux'], rating: 3, featured: true },
  { id: "c3", title: 'Best CSS Frameworks of 2018', author: 'Stephen Grider', type: 'videoSeries', url: 'https://hackernoon.com/top-5-most-popular-css-frameworks-that-you-should-pay-attention-to-in-2017-344a8b67fba1', rating: 1.1 },
  { id: "c4", title: 'JS for Beginners', author: 'Johanes', type: 'videoSeries', url: 'https://www.udemy.com', tags: ['css', 'sass', 'html'], rating: 4.7 },
  { id: "c5", title: 'Redux and React', author: 'Johanes', type: 'videoSeries', url: 'https://www.udemy.com', rating: 4.2 },
  { id: "c6", title: 'Learn Python the Hardwat', author: 'Stephen Grider', type: 'videoSeries', url: 'https://hackernoon.com/top-5-most-popular-css-frameworks-that-you-should-pay-attention-to-in-2017-344a8b67fba1', rating: 1.1 },
  { id: "c7", title: 'Java and Spring', author: 'Johanes', type: 'videoSeries', url: 'https://www.udemy.com', tags: ['css', 'sass', 'html'], rating: 4.7 },
  { id: "c8", title: 'Building large scale apps in Java', author: 'Johanes', type: 'videoSeries', url: 'https://www.udemy.com', rating: 4.2 },
];

const courses = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default combineReducers({
  courses,
})

export const getTags = (state) => {
  return state.courses
    .map(course => course.tags)
    .reduce((a, b) => a.concat(b))
    .filter((tag, pos, self) => {
      if (tag != null && self.indexOf(tag) == pos) {
        return true;
      }
      return false;
    });
}

export const getNonFeatured = (state) => {
  return state.courses
    .filter(course => !course.featured)
}

export const getFeatured = (state) => {
  return state.courses
    .filter(course => course.featured)
}

export const getCourses = (state) => {
  return state.courses;
}
