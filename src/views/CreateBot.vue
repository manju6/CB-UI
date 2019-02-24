<template>
    <div id="app" class="card-container">
        <form>
            <div v-if="step === 1">
                <br/>
                <div class="card">
                  <div class="card-header bg-info text-white" align="center">
                      <b><h6> 1 . Upload Training Set</h6></b>
                  </div>
                  
                  <div class="card-body">
                      <div class="row">
                          <div class="col-md-12"><br/></div>
                          <div class="col-md-5  text-left">
                            <div class="form-group">
                              <p class="card-text text-uppercase text-muted font-xs font-weight-bold text-center"> Training Set Name </p>
                              </div>
                          </div>
                          <div class="col-md-5  text-left">
                            <div class="form-group">
                              <input type="text" v-model="trainingSetName" placeholder="Training Set Name" class="form-control" id="prj" required>
                            </div>
                          </div>
                          <div class="col-md-12"><br/></div>
                          <div class="col-md-1 text-left">&nbsp;</div>
                          <div class="col-md-9  text-left">
                              <div class="custom-file">
                                <input type="file" class="custom-file-input" id="file" ref="myFiles" accept=".xlsx, .xls" @change.prevent="parseToJSON" multiple>
                                <label class="custom-file-label" for="customFile text-left">Choose File</label>
                              </div>
                          </div>
                          <div class="col-md-2  text-left">
                              <div class="form-group">
                                  <button @click.prevent="upload" type="button" class="btn btn-info">Upload</button>
                              </div>
                          </div>
                          <div class="col-md-12">  <br/>     <br/>  </div>
                      </div> 
                  </div> 

                <div class="card-footer" align="right"><button @click.prevent="next()" class="btn btn-success">Next</button></div>
              </div>

            </div>

            <div v-if="step === 2">
                <br/>
   					    <div class="card">
					          <div class="card-header bg-info text-white" align="center">
                          <b><h6> 2 . Train CiTi Bot </h6></b>
                    </div>
                    <div class="card-body">
        					    	<div class="row">
                          <div class="col-md-12">  <br/> </div>
                          <div class="col-md-5  text-left">
                              <div class="form-group">
                                  <p class="card-text text-uppercase text-muted font-xs font-weight-bold text-center" > Bot Name </p>
                              </div>
								          </div>
          								<div class="col-md-5  text-left">
					          				<div class="form-group">
									              <input type="text" v-model="botName" placeholder="ChatBot Name" class="form-control" id="prj" required>
									          </div>
								          </div>
		                      <div class="col-md-12">  <br/> </div>
                          <div class="col-md-1 text-left">  &nbsp; </div>
          								<div class="col-md-8  text-left">
									            <div class="custom-file">
										               <treeselect :multiple="true" :options="options" placeholder="Select your training set(s)..." v-model="values" />
									            </div>
								          </div>
                          <div class="col-md-2  text-left">
            									<div class="form-group">
                                   <button @click.prevent="trainBot()" type="button" class="btn btn-info">Train </button>
						            			</div>
								          </div>
                          <div class="col-md-12">    <br/>     <br/>       </div>
  						      	  </div> 
					            </div>  
        					    <div class="card-footer">
                           <button style="float: left;" @click.prevent="prev()" class="btn btn-success">Previous</button>
                           <button style="float: right;" @click.prevent="next()" class="btn btn-success">Next</button>
                      </div>
                	</div>
                </div>

            <div v-if="step === 3">
               <br/>
       					  <div class="card">
		      			    <div class="card-header bg-info text-white" align="center">
                          <b><h6> 3 . Activate CiTi Bot </h6></b>
                    </div>
					           <div class="card-body">
					            	<div class="row">
                            <div class="col-md-12  text-left">
                                <div class="form-group">
                                  <p v-if="url===null" class="card-text text-uppercase text-muted font-xs font-weight-bold text-center" > Hit Activate Button To Activate the Bot </p>
                                   <span v-if="url!=null">
                                      <p class="card-text text-uppercase text-muted font-xs font-weight-bold text-center" > Bot Activated </p> 
                                      <div align="center"> URL : <a  v-bind:href="''">    {{ url }} </a> </div>
                                   </span>
                                </div>
                            </div>							
                            <div class="col-md-12  text-center">
                                <div class="form-group"  align="center">
                                  <img height="150" width="150" src="https://www.growthmarketingpro.com/wp-content/uploads/2018/04/health-ai-GIF-downsized.gif">
                                </div>
                            </div>
							          </div> 
					          </div> 
      					    <div class="card-footer">
                          <button style="float: left;" @click.prevent="prev()" class="btn btn-success">Previous</button>
                          <button style="float: right;" @click.prevent="submit()" class="btn btn-danger">Activate CiTi</button>
                    </div>
      		      </div>
            </div>
      </form>
</div>
</template>


<style>
* {
  box-sizing: border-box;
}

body {
  background-color: #f1f1f1;
}

#regForm {
  background-color: #ffffff;
  margin: 100px auto;
  font-family: Raleway;
  padding: 40px;
  width: 70%;
  min-width: 300px;
}

h1 {
  text-align: center;  
}

input {
  padding: 10px;
  width: 100%;
  font-size: 17px;
  font-family: Raleway;
  border: 1px solid #aaaaaa;
}

/* Mark input boxes that gets an error on validation: */
input.invalid {
  background-color: #ffdddd;
}

/* Hide all steps by default: */
.tab {
  display: none;
}

button {
  background-color: #4CAF50;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  font-size: 17px;
  font-family: Raleway;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}

#prevBtn {
  background-color: #bbbbbb;
}

/* Make circles that indicate the steps of the form: */
.step {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbbbbb;
  border: none;  
  border-radius: 50%;
  display: inline-block;
  opacity: 0.5;
}

.step.active {
  opacity: 1;
}

/* Mark the steps that are finished and valid: */
.step.finish {
  background-color: #4CAF50;
}

.card-container{
  width:50%;
  float:left;
  margin-left:30%;
  margin-top:10%;
}

.align-right{
    align-items  : right;
}

.card-footer {
    padding: 0.50rem 0.50rem;
    background-color: rgba(0,0,0,.03);
    border-top: 1px solid rgba(0,0,0,.125);
}

button {
    background-color: #4CAF50;
    color: #ffffff;
    border: none;
    padding: 5px 10px;
    font-size: 18px;
    font-family: Raleway;
    cursor: pointer;
}

.card-header{
		width:90%;
		border-bottom:5px;
		overflow:hidden;
		margin-bottom: 0!important;
		margin-left: 4%;
		margin-right: 4%;
		margin-top: -1.25rem;
		padding: 0.5rem 1rem;
		text-align: center;
		border-radius: .25rem;
		box-shadow: 0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15);
		background-color: #09c!important;
		position: relative;
		-webkit-transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		 transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}
	

	footer {
	  position: absolute;
	  bottom: 0;
	  background: black;
	}


	.white-text
	{
		color: white;
		text-shadow: 0 1px black;
	}


</style>


<script>
/*jshint smarttabs:true  */
import axios from "axios";
import XLSX from 'xlsx';
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'

export default {
  name: "CreateBot",
   components: {
      Treeselect
    },
  data() {
    return {
        step:1,
        trainingSetName:'',
        jsonData: null,
        files: [],
        trainingSetname: 'Sample',
        values: null,
        botName: '',
        errors: [],
        options: [],
        url:null,
     
     registration:{
        name:null,
        email:null,
        street:null,
        city:null,
        state:null,
        numtickets:0,
        shirtsize:'XL'
      }
    }
  },
  methods:
  {
    prev() {
      this.step--;
    },
    next() {
      this.step++;
    },
    submit() 
    {
      axios.get('http://localhost:4200/api/activateBot').then((response) => 
      {
          this.url = response.data.url;
      }).catch(err => { console.log(err)  });
    },
    trainBot() 
    {
      axios.get('http://localhost:4200/api/formJSON').then((response) => 
      {
         console.log(response.data);
      }).catch(err => { console.log(err)  });
    },
    upload() 
    {
        axios.post('http://localhost:4200/api/trainingSet', this.$data.jsonData).then(response => 
        {
          axios.get('http://localhost:4200/api/teams').then((response) => 
          {
    		for (var dt in response.data) 
	          {
	              this.options.push({
		                  label: response.data[dt],
		                  id: dt
		                });
		      }
		  })
        })
        .catch(err => { console.log(err)  })
    },
    parseToJSON: function(oEvent) {
        var responseTrainer = [];
        var oFile = oEvent.target.files[0];
        var sFilename = oFile.name;
  
        var reader = new FileReader();
        var result = {};
        var teamName = this.$data.trainingSetName;
  
        reader.onload = function(e) {
          var data = e.target.result;
          var workbook = XLSX.read(data, {
            type: 'array'
          });
          workbook.SheetNames.forEach(function(sheetName) {
            var worksheet = workbook.Sheets[sheetName];
            var headers = {};
  
            for (data in worksheet) {
              if (data[0] === '!') continue;
  
              var col = data.substring(0, 1);
              var row = parseInt(data.substring(1));
              var value = worksheet[data].v;
  
              if (row == 1) {
                if (col == "A") {
                  headers[col] = "text";
                }
                if (col == "B") {
                  headers[col] = "intent";
                }
                if (col == "C") {
                  headers[col] = "entities";
                }
                if (col == "D") {
                  headers[col] = "response";
                }
                continue;
              } else {
                if (col == "A") {
                  var question = value;
                }
                if (col == "B") {
                  var intent = value.toLowerCase();
                }
                if (col == "C") {
                  var obj = [];
                  var entitiesArray = value.split(',');
                  var entitiesList = obj;
  
                  for (var i = 0; i < entitiesArray.length; i++) {
                    var startIndex = question.toLowerCase().indexOf(entitiesArray[i].toLowerCase());
                    var endIndex = startIndex + (entitiesArray[i].length - 1);
                    if (startIndex >= 0) {
                      obj.push({
                        start: startIndex,
                        end: endIndex,
                        entities: entitiesArray[i]
                      });
                    }
                  }
                }
                if (col == "D") {
                  var response = value;
                  responseTrainer.push({
                    team: teamName,
                    text: question,
                    entities: entitiesList,
                    intent: intent,
                    response: response
                  });
                }
              }
            }
          });
        };
        reader.readAsArrayBuffer(oFile);
        this.$data.jsonData = responseTrainer;
        return responseTrainer;
      }
    }
  }
</script>

