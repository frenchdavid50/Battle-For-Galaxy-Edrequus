#pragma strict

public var blue1: Color;
public var blue2: Color;
public var green1: Color;
public var yellow1: Color;
public var red1: Color;

public var rend: Renderer;

function OnMouseEnter () {
	rend.material.color = blue2;
	transform.position.y = 0.2;
	Debug.Log ("mouse enter" + Time.time + " s");
}
function OnMouseExit () {
	rend.material.color = blue1;
	transform.position.y = 0.0;
}

