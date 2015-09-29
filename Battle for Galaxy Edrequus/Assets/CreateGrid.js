//following public variable is used to store the hex model prefab;
    //instantiate it by dragging the prefab on this variable using unity editor
    public var Hex: GameObject;
    //next two variables can also be instantiated using unity editor
    public var gridWidthInHexes = 10;
    public var gridHeightInHexes = 10;
 
    //Hexagon tile width and height in game world
    

    public var gridPos: Vector2;

    public var hexGridGO: GameObject;

    public var initPos: Vector3;
    public var hexHeight;
    public var hexWidth;
 
 
    //Method to initialise Hexagon width and height
    function setSizes()
    {
         
    //renderer component attached to the Hex prefab is used to get the current width and height
        var hexWidth = Hex.GetComponent.<Renderer>().bounds.size.y;
        var hexHeight = Hex.GetComponent.<Renderer>().bounds.size.x;
    }

        //Method to calculate the position of the first hexagon tile
        //The center of the hex grid is (0,0,0)
        var calcInitPos = Vector3;
        {
            
            //the initial position will be in the left upper corner
            initPos = new Vector3(-hexWidth * gridWidthInHexes / 2f + hexWidth / 2, 0,
                gridHeightInHexes / 2f * hexHeight - hexHeight / 2);
 
             
        }
 
        var calcWorldCoord: Vector3;
        {
            //Position of the first hex tile
            initPos = calcInitPos();
            //Every second row is offset by half of the tile width
            var offset = 0;
            if (gridPos.y % 2 != 0)
                offset = hexWidth / 2;
 
            var x =  initPos.x + offset + gridPos.x * hexWidth;
            //Every new line is offset in z direction by 3/4 of the hexagon height
            var z = initPos.z - gridPos.y * hexHeight * 0.75f;
            return new Vector3(x, 0, z);
        }
 
        function createGrid()
        {
            //Game object which is the parent of all the hex tiles
        
            for (var y = 0; y < gridHeightInHexes; y++)
            {
                for (var x = 0; x < gridWidthInHexes; x++)
                {
                    //GameObject assigned to Hex public variable is cloned
                    var hex = Instantiate(Hex);
                    //Current position in grid
                
                    Hex.transform.position = calcWorldCoord;
                    Hex.SetParent = hexGridGO.transform;
                }
            }
        }

        //Finally the method which initialises and positions all the tiles
    
 
        //The grid should be generated on game start
        function Start () {
            setSizes();
            createGrid();
        }
    

