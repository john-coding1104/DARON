cmake_minimum_required(VERSION 3.22)

project(Daron)

# This is a minimal CMakeLists.txt to enable proper C++ standard library linking
# for React Native modules that require C++ support.

# The actual native code is handled by the autolinking system.
# This file ensures the build system uses the correct C++ runtime.

# Explicitly link the C++ shared standard library
link_libraries(c++_shared)
