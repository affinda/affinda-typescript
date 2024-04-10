[@affinda/affinda](../README.md) / [Exports](../modules.md) / RegionBias

# Interface: RegionBias

## Table of contents

### Properties

- [countries](RegionBias.md#countries)
- [country](RegionBias.md#country)
- [squareCoordinates](RegionBias.md#squarecoordinates)
- [strict](RegionBias.md#strict)

## Properties

### countries

• `Optional` **countries**: `string`[]

A list of alpha-2 country codes used by Pelias

___

### country

• `Optional` **country**: `string`

A single alpha-2 country code (e.g. AU) used by google geocoding service

___

### squareCoordinates

• `Optional` **squareCoordinates**: `number`[]

A list of coordinates used by Pelias in the shape of [min_lon, min_lat, max_lon, max_lat]

___

### strict

• `Optional` **strict**: `boolean`

If true, the location must be within the region, as opposed to prefering locations within the region.
Default to false.
