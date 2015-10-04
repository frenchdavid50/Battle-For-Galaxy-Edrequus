#pragma strict

public var shipSpeed: float = 0.75;

function Update () {
	if (Input.GetKeyDown (KeyCode.H)) {
		transform.Rotate (Vector3.up * 60);
	}
	if (Input.GetKeyDown (KeyCode.F)) {
		transform.Rotate (Vector3.down * 60);
	}
	if (Input.GetKeyDown (KeyCode.T)) {
		transform.Translate (Vector3.right * shipSpeed);
	}
}