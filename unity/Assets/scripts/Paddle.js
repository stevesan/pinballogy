#pragma strict

var keyString = "F";
var label:TextMesh;

var targetDegs = 45.0;

function Awake() {
    label.text = keyString;
}

function Update() {
    if( Input.GetButton(keyString) ) {
        hingeJoint.spring.targetPosition = targetDegs;
    }
    else {
        hingeJoint.spring.targetPosition = 0;
    }
}
