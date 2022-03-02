export const useQuiz=()=>{
    const desorden = (array) => {
        let t = array.sort(function (a, b) {
          return (Math.random() - 0.5);
        })
        return [...t];
      }
      const randomNumber =(min, max) => {
        let num = Math.round(Math.random() * (max - min) + min)
        return num;
      }
      return [desorden,randomNumber]
}