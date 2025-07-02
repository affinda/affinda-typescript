[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / RegionBias

# Interface: RegionBias

## Properties

### countries?

> `optional` **countries**: `string`[]

A list of alpha-2 country codes used by Pelias

***

### country?

> `optional` **country**: `string`

A single alpha-2 country code (e.g. AU) used by google geocoding service

***

### squareCoordinates?

> `optional` **squareCoordinates**: `number`[]

A list of coordinates used by Pelias in the shape of [min_lon, min_lat, max_lon, max_lat]

***

### strict?

> `optional` **strict**: `boolean`

If true, the location must be within the region, as opposed to prefering locations within the region.
Default to false.
