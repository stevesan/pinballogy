#pragma strict

var velocity = Vector3(1.0, 0, 0);

function Start () {

}

function OnGamePaused()
{
    velocity = Vector3(0,0,0);
}

function Update () {

    transform.localPosition += velocity * Time.deltaTime;
}
