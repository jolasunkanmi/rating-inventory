const ratingBox=document.querySelector(".rating-box");
const buttons=document.querySelectorAll(".button");
const submitBtn= document.getElementById("submit");
const result= document.getElementById("result-panel");
const resultBox=document.querySelector(".thankyou-box");

let selectedRating=null;

buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        buttons.forEach(btn=>{
            if(btn.classList.contains("active")){
                btn.classList.remove("active");
            }
        })
        button.classList.add("active");
        selectedRating=button.textContent;
    })
    submitBtn.addEventListener("click",()=>{
        if(selectedRating=== null){
            alert("Chose a number rating.")
        }
        else{
            ratingBox.hidden="true";
            resultBox.style.display="flex";
            result.textContent=`You selected ${selectedRating} out of 5`;
            result.classList.add("result");
        }
    })
}
)