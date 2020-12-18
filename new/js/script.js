//C6.6 Final

const input=document.querySelector(".entermessage")
const btnSend=document.querySelector(".j-btn-send")
const btnGeo=document.querySelector(".j-btn-geo")
const sideboard=document.querySelector(".sideboard")
let websocket
const wsUri='wss://echo.websocket.org/'

function displayMessage(message,flag){
	const divOutput=document.createElement('div')
	switch(flag) {
		case 'user':
			divOutput.style='margin-right:5%;max-width:25%;border-style:solid;border-radius:10px;background:blue;text-align:center;align-self:flex-end;'
			break
		case 'response':
			divOutput.style='margin-left:5%;max-width:25%;border-style:solid;border-radius:10px;background:cyan;text-align:center;align-self:flex-start;'	
			break
		case 'system':
			divOutput.style='max-width:40%;border-style:solid;border-radius:10px;background-color:green;text-align:center;align-self:center;'		
			break
		}

	

	divOutput.innerHTML=`<p style="padding:10px 10px">${message}</p>`
	sideboard.appendChild(divOutput)
	sideboard.scrollTo(0,sideboard.offsetHeight*100)
}

function socketOpen(uri){
	websocket=new WebSocket(uri)
	websocket.onopen=function(evt){
		displayMessage("System:connected to server",'system')
	}
	websocket.onclose=(evt)=>{
		displayMessage("System:disconnected ")
	}
	websocket.onmessage=(evt)=>{
		displayMessage(evt.data,'response')
	}
	websocket.onerror=(evt)=>{
		displayMessage(`Error ${evt.data}`)
	}
}

function 

btnSend.addEventListener('click',()=>{
	const message=input.value
	displayMessage(message,'user')
	websocket.send(message)
})


socketOpen(wsUri)