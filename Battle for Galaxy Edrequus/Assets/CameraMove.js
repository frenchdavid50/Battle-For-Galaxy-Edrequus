#pragma strict

public var camSpeed: float = 1.5;

function Update () {

	var moveHorizontal: float = Input.GetAxis ("Horizontal") * camSpeed;
	var moveVertical: float = Input.GetAxis ("Vertical") * camSpeed;
	
	moveHorizontal *= Time.deltaTime;
	moveVertical *= Time.deltaTime;
	
	transform.Translate (moveHorizontal, moveVertical, 0);
}