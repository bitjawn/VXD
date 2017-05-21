import Vue from 'vue';
import Vuex from 'vuex';
import uuid from 'uuid';

Vue.use(Vuex);

const state = {
    userMessages: []
}

const mutations = {
    addMessage: (state, msg) => {msg.id = uuid.v4(); state.userMessages.push(msg);},
    removeMessage: (state, id) => {
        var index = state.userMessages.find(x => x.id == id);
        if (index != -1) {
            state.userMessages.splice(index, 1);
        }
    },
    sendUserMessage: (state, id) => {
        var index = state.userMessages.find(x => x.id == id);

        if (index != -1) {
            var msg = state.userMessages[index];
            state.userMessages.splice(index, 1);
        } else {
            console.log('Message not sent');
        }
        /*var helper = require('sendgrid').mail;
        var fromEmail = new helper.Email('test@example.com');
        var toEmail = new helper.Email(msg.email);
        var subject = msg.subject;
        var content = new helper.Content('html/plain', msg.message);
        var mail = new helper.Mail(fromEmail, subject, toEmail, content);

        var sg = require('sendgrid')(process.env.AK);
        var request = sg.emptyRequest({
          method: 'POST',
          path: '/v3/mail/send',
          body: mail.toJSON()
        });

        sg.API(request, function (error, response) {
          if (error) {
            console.log('Error response received');
          }
          console.log(response.statusCode);
          console.log(response.body);
          console.log(response.headers);
      });*/

    }
}

const actions = {
    addNewMessage: ({commit}, payload) => commit('addMessage', payload),
    removeUserMessage: ({commit}, payload) => commit('removeMessage', payload),
    //sendUserMessage: ({commit}, payload) => commit('sendUserMessage', payload)
    //*
    sendUserMessage: ({commit}, payload) => {
        return new Promise((response, reject) => {
            setTimeout(() => { commit('sendUserMessage');}, 500)
        })
    }//*/
}

const getters = {
    messages: state => state.userMessages
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
