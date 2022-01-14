<template>
  
  <div class="card p-3 py-3 mt-3 card-1 text-center postion-relative">
    <h4> Addresses </h4>
    <div  class="p-3 card-2">
        <div v-for="add in address" :key="add._id" class="p-3 card-child mb-3">
            <div  class="position-absolute d-flex flex-column action_wrapper">
                <button class="action_btn btn btn-danger">
                    <i class="fa fa-trash"></i>
                </button>
                <button class="action_btn btn btn-primary"> 
                   <i class="fa fa-edit"></i>
                </button>
            </div>
            <div style="gap:10px" class="d-flex flex-row align-items-center"> <span class="circle"> <i class="fa fa-home"></i> </span>
                <div class="d-flex flex-column ms-3">
                    <h6 class="fw-bold">Home</h6> <span>{{add.address1}}, <br>{{add.city}}, {{add.state}} , {{add.country}}</span>
                </div>
                
            </div>
            
        </div>
       
        <div v-if="address.length < 2" class="p-3 card-child mt-4 py-4">
            <div  style="gap:10px" class="d-flex flex-row align-items-center">
                 <span class="circle-3"> <i class="fa fa-plus"></i> </span>
                <div class="d-flex flex-column ms-3 mt-1">
                    <h6 class="fw-bold y">Add New Address</h6>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props:["address"]
}
</script>

<style scoped>
    .card-1 {
    width: 400px;
    border-radius: 18px;
    border: none
}

.action_wrapper {
    gap:10px;
    right: -25px;
}
.action_btn{
    border-radius: 10px;
    font-size: 18px;
}

.card-2 {
    border-radius: 20px
}

.card-child {
    border: 3px solid var(--theme-deafult);
    border-radius: 16px;
   
}

@media (max-width:666px){
    .card-child {
        margin-right: 18px;
    }
    .action_wrapper {
    
    right: -7px;
}
}

.circle {
    background-color: #ebdffb;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
    color: #9553ea;
    justify-content: center;
    align-items: center;
    font-size: 20px
}

.circle-2 {
    background-color: #fbebdf;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
    color: #ea9253;
    justify-content: center;
    align-items: center;
    font-size: 20px
}

.circle-3 {
    background-color: var(--theme-deafult);;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
    color: #fff;
    justify-content: center;
    align-items: center;
    font-size: 20px
}
</style>