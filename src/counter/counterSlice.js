import { createSlice } from '@reduxjs/toolkit'
import { useState } from 'react';


export const counterSlice = createSlice(
  {
  name: 'counter',
  initialState: {
    value: [],
    tempstoreg: [],
    second: true,
    firstname: "",
    gender: "",
    f_name_newac: "",
    l_name_newac: "",
    gender_newac: "",
    date_newac: "",
    index: "",
    username: "",
    email: "",
    password: "",
  },


  reducers: {

    addcart: (state , actions) => {

      for(var i = 0 ; i < state.value.length ; i++)
      {
        if(state.value[i].title == actions.payload.title)
        {
          state.second = false;
        }
      }

      if(state.second == true)
      {
        actions.payload.qnt = 1;
        actions.payload.qntprice = actions.payload.price * actions.payload.qnt;
        state.value = [...state.value,actions.payload]; 
        alert(actions.payload.title+" add scussfully in cart");
      }
      else
      {
        for(var i = 0 ; i < state.value.length ; i++)
        {
          if(state.value[i].title == actions.payload.title && state.value[i].qnt < 10)
          {
            alert("item readeed scussfully");
            state.value[i].qnt++;
            state.value[i].qntprice = parseFloat(state.value[i].price) * parseFloat(state.value[i].qnt);
          }
          else
          {
            alert("you can't add this item more");
          }
        }
      }

      state.second = true;
    },

    additem: (state , actions) => {
      if(state.value[actions.payload].qnt < 10)
      {
        state.value[actions.payload].qnt++;
        state.value[actions.payload].qntprice = parseFloat(state.value[actions.payload].price) * parseFloat(state.value[actions.payload].qnt);
      }
      else
      {
        alert("you can't add this item more");
      }
    },

    minusitem: (state , actions) => {
      if(state.value[actions.payload].qnt > 1)
      {
        state.value[actions.payload].qnt--;
        state.value[actions.payload].qntprice = parseFloat(state.value[actions.payload].price) * parseFloat(state.value[actions.payload].qnt);
      }
      else
      {
        alert("somthing goes worng....")
      }
    },

    removeitem: (state , actions) => {

      state.tempstoreg = state.value;
      state.value = [];

      for(var i = 0; i < state.tempstoreg.length ; i++)
      {
        console.log(state.tempstoreg[i]);
        if(state.tempstoreg[i].title != actions.payload.title)
        {
          state.value = [...state.value , state.tempstoreg[i]];
        }
      }
    },

    name: (state , actions) =>
    {
      state.firstname = actions.payload[0];
      state.gender = actions.payload[1];
    },

    nextpage: (state , actions) => 
    {
      state.f_name_newac = actions.payload[0];
      state.l_name_newac = actions.payload[1];
      state.gender_newac = actions.payload[2];
      state.date_newac = actions.payload[3];
    },

    getdata: (state , actions) => 
    {
      state.index = actions.payload[0];
      state.username = actions.payload[1];
      state.email = actions.payload[2];
      state.password = actions.payload[3];
    }

  },
})

// Action creators are generated for each case reducer function
export const { addcart , additem , minusitem , removeitem , name , nextpage , getdata} = counterSlice.actions

export default counterSlice.reducer