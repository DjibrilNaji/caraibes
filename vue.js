var app = new Vue({
        el: '#app',
        data() {
        return {
        info: null,
        }
        },
        mounted () {
            axios({
          method: 'get',
           // a changer
          url: 'http://127.0.0.1:5000/',
          responseType: 'json',
         /* data: {
            firstName: 'Fred',
            lastName: 'Flintstone'
          }*/
        })
           .then(async res => { 
             if(res.status === 200) { 
                  // a changer pour obtneir le tableau de data
                   this.info=res.data;

              } else if(res.status === 400) { 
                  let errorResponse = await res.json(); this.errors.push(errorResponse.error); }
           });
      }
    })

        
