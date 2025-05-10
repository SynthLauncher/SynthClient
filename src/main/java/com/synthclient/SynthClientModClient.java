package com.synthclient;

import net.fabricmc.api.ClientModInitializer;

public class SynthClientModClient implements ClientModInitializer {
    @Override
    public void onInitializeClient() {
        // Client-specific initialization logic for SynthClient
        System.out.println("SynthClientModClient initialized!");
    }
}