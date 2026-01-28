// logic.c
#include <emscripten.h>

// यह फंक्शन C में लिखा गया है जो दो नंबर को जोड़ता है
EMSCRIPTEN_KEEPALIVE
int add_in_c(int a, int b) {
    return a + b;
}

// यह फंक्शन C में लिखा गया है जो नंबर का स्क्वायर (Square) निकालता है
EMSCRIPTEN_KEEPALIVE
int square_in_c(int n) {
    return n * n;
}
