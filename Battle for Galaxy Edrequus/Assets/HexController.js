#pragma strict

public var blue1: Color;
public var blue2: Color;
public var green1: Color;
public var yellow1: Color;
public var red1: Color;

function OnMouseEnter () {
	GetComponent.<Renderer>().material.color = blue2;
	Debug.Log ("mouse enter" + Time.time + " s");
}
function OnMouseExit () {
	GetComponent.<Renderer>().material.color = blue1;
}

