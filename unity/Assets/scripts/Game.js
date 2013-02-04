#pragma strict

function Start () {

}

function Update () {

    if( Input.GetButtonDown("Reset") )
    {
        Application.LoadLevel(Application.loadedLevel);
    }
    else if( Input.GetButtonDown("Skip") )
    {
        if( Application.loadedLevel == Application.levelCount-1 )
        {
            // game over!
            Debug.Log("BEAT GAME!");
        }
        else
        {
            Debug.Log("loading "+(Application.loadedLevel+1));
            Application.LoadLevel(Application.loadedLevel+1);
        }
    }

}
