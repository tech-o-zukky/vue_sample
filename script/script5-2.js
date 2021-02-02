new Vue({
  el: '#app',
  data() {
    return {
      menus: [{
        label: 'TOP',
        path: './navigation.html'
      },{
        label: 'ABOUT',
        path: './5_about.html'
      },{
        label: 'SCHEDULE',
        path: './5_schedule.html'
      },{
          label: 'CONTACT',
          path: './5_contact.html'
      }]
    };
  }
});