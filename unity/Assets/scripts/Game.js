#pragma strict

function Start () {

}

function Update () {

    if( Input.GetButtonDown("Reset") )
    {
        Application.LoadLevel(Application.loadedLevel);
    }

}
