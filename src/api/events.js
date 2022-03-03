import axios from "axios";

export default {  
  async getAll() {
    const data = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');    
    return data
    // await new Promise((resolve) => setTimeout(resolve, 2000));  
    // return {
    //   data: [
    //     {
    //       id: 1,
    //       title: "Гроза",
    //       slug: "groza",
    //       date: [
    //         {
    //           day: '12 марта', 
    //           times: [
    //             '10:20'
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       id: 2,
    //       title: "Stand-Up Dvizh",
    //       slug: "stand-up-dvizh",
    //       date: [
    //         {
    //           day: '22 апрель',                 
    //           times: [
    //             '09:25',
    //             '15:30'
    //           ]
    //         },
    //         {
    //           day: '2 май', 
    //           times: [
    //             '18:10',
    //             '20:30'
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       id: 3,
    //       title: "МЫКОСМОС",
    //       slug: "mykosmos",
    //       date: [
    //         {
    //           day: '7 июнь', 
    //           times: [
    //             '11:50'
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       id: 4,
    //       title: "New Matters",
    //       slug: "new-matters",
    //       date: [
    //         {
    //           day: '20 июль', 
    //           times: [
    //             '10:20',
    //             '14:40'
    //           ]
    //         },
    //         {
    //           day: '26 июль', 
    //           times: [
    //             '21:00',
    //             '22:30'
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       id: 5,
    //       title: "Cinema Love",
    //       slug: "cinema-love",
    //       date: [
    //         {
    //           day: '5 август', 
    //           times: [
    //             '10:20',
    //             '14:40'
    //           ]
    //         }
    //       ]
    //     },
    //   ],
    // };
  },
}    




// import axios from "axios";
// export const getAll = async () => {
//     const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');    
//     return data;
// };

