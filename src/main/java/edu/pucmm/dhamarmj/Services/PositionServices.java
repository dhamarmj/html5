package edu.pucmm.dhamarmj.Services;

import edu.pucmm.dhamarmj.Encapsulation.Position;

public class PositionServices extends DatabaseServices<Position> {
    private static PositionServices instancia;
    private PositionServices() {
        super(Position.class);
    }

    public static PositionServices getInstancia() {
        if (instancia == null) {
            instancia = new PositionServices();
        }
        return instancia;
    }
}

