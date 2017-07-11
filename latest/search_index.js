var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#FastTransforms.jl-Documentation-1",
    "page": "Home",
    "title": "FastTransforms.jl Documentation",
    "category": "section",
    "text": ""
},

{
    "location": "index.html#Introduction-1",
    "page": "Home",
    "title": "Introduction",
    "category": "section",
    "text": "In numerical analysis, it is customary to expand a function in a basis:f(x) sim sum_ell=0^infty f_ell phi_ell(x)It may be necessary to transform our representation to one in a new basis, say, psi_m(x)_mge0:f(x) sim sum_m=0^infty g_m psi_m(x)In many cases of interest, both representations are of finite length n and we seek a fast method (faster than mathcalO(n^2)) to transform the original coefficients f_ell to the new coefficients g_m.A similar problem arises when we wish to evaluate f at a set of points x_m_m=0^n. We wish to transform coefficients of f to values at the set of points in fewer than mathcalO(n^2) operations."
},

{
    "location": "index.html#FastTransforms.leg2cheb",
    "page": "Home",
    "title": "FastTransforms.leg2cheb",
    "category": "Function",
    "text": "Computes the Chebyshev expansion coefficients given the Legendre expansion coefficients:\n\nrm CLT  sum_n=0^N c_n^rm legP_n(x) to sum_n=0^N c_n^rm chebT_n(x)\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.cheb2leg",
    "page": "Home",
    "title": "FastTransforms.cheb2leg",
    "category": "Function",
    "text": "Computes the Legendre expansion coefficients given the Chebyshev expansion coefficients:\n\nrm iCLT  sum_n=0^N c_n^rm chebT_n(x) to sum_n=0^N c_n^rm legP_n(x)\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.plan_leg2cheb",
    "page": "Home",
    "title": "FastTransforms.plan_leg2cheb",
    "category": "Function",
    "text": "Pre-computes the Legendre–Chebyshev transform.\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.plan_cheb2leg",
    "page": "Home",
    "title": "FastTransforms.plan_cheb2leg",
    "category": "Function",
    "text": "Pre-computes the Chebyshev–Legendre transform.\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.cjt",
    "page": "Home",
    "title": "FastTransforms.cjt",
    "category": "Function",
    "text": "Computes the Chebyshev expansion coefficients given the Jacobi expansion coefficients c with parameters alpha and beta:\n\nrm CJT  sum_n=0^N c_n^rm jacP_n^(alphabeta)(x) to sum_n=0^N c_n^rm chebT_n(x)\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.icjt",
    "page": "Home",
    "title": "FastTransforms.icjt",
    "category": "Function",
    "text": "Computes the Jacobi expansion coefficients with parameters alpha and beta given the Chebyshev expansion coefficients c:\n\nrm iCJT  sum_n=0^N c_n^rm chebT_n(x) to sum_n=0^N c_n^rm jacP_n^(alphabeta)(x)\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.jjt",
    "page": "Home",
    "title": "FastTransforms.jjt",
    "category": "Function",
    "text": "Computes the Jacobi expansion coefficients with parameters gamma and delta given the Jacobi expansion coefficients c with parameters alpha and beta:\n\nrm JJT  sum_n=0^N c_n^rm jacP_n^(alphabeta)(x) to sum_n=0^N c_n^rm jacP_n^(gammadelta)(x)\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.plan_cjt",
    "page": "Home",
    "title": "FastTransforms.plan_cjt",
    "category": "Function",
    "text": "Pre-plan optimized DCT-I and DST-I plans and pre-allocate the necessary arrays, normalization constants, and recurrence coefficients for a forward Chebyshev—Jacobi transform.\n\nc is the vector of coefficients; and,\n\nalpha and beta are the Jacobi parameters.\n\nOptionally:\n\nM determines the number of terms in Hahn's asymptotic expansion.\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.plan_icjt",
    "page": "Home",
    "title": "FastTransforms.plan_icjt",
    "category": "Function",
    "text": "Pre-plan optimized DCT-I and DST-I plans and pre-allocate the necessary arrays, normalization constants, and recurrence coefficients for an inverse Chebyshev—Jacobi transform.\n\nc is the vector of coefficients; and,\n\nalpha and beta are the Jacobi parameters.\n\nOptionally:\n\nM determines the number of terms in Hahn's asymptotic expansion.\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.nufft1",
    "page": "Home",
    "title": "FastTransforms.nufft1",
    "category": "Function",
    "text": "Computes a nonuniform fast Fourier transform of type I:\n\nf_j = sum_k=0^N-1 c_k e^-2pirm i fracjN omega_kquadrm forquad 0 le j le N-1\n\n\n\nComputes a 2D nonuniform fast Fourier transform of type I-I:\n\nf_ij = sum_k=0^M-1sum_ell=0^N-1 C_kell e^-2pirm i (fraciM omega_k + fracjN pi_ell)quadrm forquad 0 le i le M-1quad 0 le j le N-1\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.nufft2",
    "page": "Home",
    "title": "FastTransforms.nufft2",
    "category": "Function",
    "text": "Computes a nonuniform fast Fourier transform of type II:\n\nf_j = sum_k=0^N-1 c_k e^-2pirm i x_j kquadrm forquad 0 le j le N-1\n\n\n\nComputes a 2D nonuniform fast Fourier transform of type II-II:\n\nf_ij = sum_k=0^M-1sum_ell=0^N-1 C_kell e^-2pirm i (x_i k + x_j ell)quadrm forquad 0 le i le M-1quad 0 le j le N-1\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.nufft3",
    "page": "Home",
    "title": "FastTransforms.nufft3",
    "category": "Function",
    "text": "Computes a nonuniform fast Fourier transform of type III:\n\nf_j = sum_k=0^N-1 c_k e^-2pirm i x_j omega_kquadrm forquad 0 le j le N-1\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.inufft1",
    "page": "Home",
    "title": "FastTransforms.inufft1",
    "category": "Function",
    "text": "Computes an inverse nonuniform fast Fourier transform of type I.\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.inufft2",
    "page": "Home",
    "title": "FastTransforms.inufft2",
    "category": "Function",
    "text": "Computes an inverse nonuniform fast Fourier transform of type II.\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.plan_nufft1",
    "page": "Home",
    "title": "FastTransforms.plan_nufft1",
    "category": "Function",
    "text": "Pre-computes a nonuniform fast Fourier transform of type I.\n\n\n\nPre-computes a 2D nonuniform fast Fourier transform of type I-I.\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.plan_nufft2",
    "page": "Home",
    "title": "FastTransforms.plan_nufft2",
    "category": "Function",
    "text": "Pre-computes a nonuniform fast Fourier transform of type II.\n\n\n\nPre-computes a 2D nonuniform fast Fourier transform of type II-II.\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.plan_nufft3",
    "page": "Home",
    "title": "FastTransforms.plan_nufft3",
    "category": "Function",
    "text": "Pre-computes a nonuniform fast Fourier transform of type III.\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.plan_inufft1",
    "page": "Home",
    "title": "FastTransforms.plan_inufft1",
    "category": "Function",
    "text": "Pre-computes an inverse nonuniform fast Fourier transform of type I.\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.plan_inufft2",
    "page": "Home",
    "title": "FastTransforms.plan_inufft2",
    "category": "Function",
    "text": "Pre-computes an inverse nonuniform fast Fourier transform of type II.\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.paduatransform",
    "page": "Home",
    "title": "FastTransforms.paduatransform",
    "category": "Function",
    "text": "Padua Transform maps from interpolant values at the Padua points to the 2D Chebyshev coefficients.\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.ipaduatransform",
    "page": "Home",
    "title": "FastTransforms.ipaduatransform",
    "category": "Function",
    "text": "Inverse Padua Transform maps the 2D Chebyshev coefficients to the values of the interpolation polynomial at the Padua points.\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.plan_paduatransform!",
    "page": "Home",
    "title": "FastTransforms.plan_paduatransform!",
    "category": "Function",
    "text": "Pre-plan a Padua Transform.\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.plan_ipaduatransform!",
    "page": "Home",
    "title": "FastTransforms.plan_ipaduatransform!",
    "category": "Function",
    "text": "Pre-plan an Inverse Padua Transform.\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.sph2fourier",
    "page": "Home",
    "title": "FastTransforms.sph2fourier",
    "category": "Function",
    "text": "Computes the bivariate Fourier series given by the spherical harmonic expansion:\n\nrm SHT  sum_ell=0^nsum_m=-ell^ell f_ell^m Y_ell^m(thetavarphi) to sum_ell=0^nsum_m=-n^n g_ell^m frace^rm i m varphisqrt2pi leftbeginarrayccoselltheta sin(ell+1)thetaendarrayright\n\nwhere the cosines are used when m is even and the sines are used when m is odd. The spherical harmonic expansion coefficients are organized as follows:\n\nF = beginpmatrix\nf_0^0  f_1^-1  f_1^1  f_2^-2  f_2^2  cdots  f_n^-n  f_n^n\nf_1^0  f_2^-1  f_2^1  f_3^-2  f_3^2  cdots  0  0\nvdots  vdots  vdots   vdots   vdots  ddots  vdots  vdots\nf_n-2^0  f_n-1^-1  f_n-1^1  f_n^-2  f_n^2    vdots  vdots\nf_n-1^0  f_n^-1  f_n^1  0  0  cdots  0  0\nf_n^0  0  0  0  0  cdots  0  0\nendpmatrix\n\nand the Fourier coefficients are organized similarly:\n\nG = beginpmatrix\ng_0^0  g_0^-1  g_0^1  cdots  g_0^-n  g_0^n\ng_1^0  g_1^-1  g_1^1  cdots  g_1^-n  g_1^n\nvdots  vdots  vdots  ddots  vdots  vdots\ng_n-1^0  g_n-1^-1  g_n-1^1 cdots  g_n-1^-n  g_n-1^n\ng_n^0  0  0  cdots  g_n^-n  g_n^n\nendpmatrix\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.fourier2sph",
    "page": "Home",
    "title": "FastTransforms.fourier2sph",
    "category": "Function",
    "text": "Computes the spherical harmonic expansion given by the bivariate Fourier series:\n\nrm iSHT  sum_ell=0^nsum_m=-n^n g_ell^m frace^rm i m varphisqrt2pi leftbeginarrayccoselltheta sin(ell+1)thetaendarrayright to sum_ell=0^nsum_m=-ell^ell f_ell^m Y_ell^m(thetavarphi)\n\nwhere the cosines are used when m is even and the sines are used when m is odd. The spherical harmonic expansion coefficients are organized as follows:\n\nF = beginpmatrix\nf_0^0  f_1^-1  f_1^1  f_2^-2  f_2^2  cdots  f_n^-n  f_n^n\nf_1^0  f_2^-1  f_2^1  f_3^-2  f_3^2  cdots  0  0\nvdots  vdots  vdots   vdots   vdots  ddots  vdots  vdots\nf_n-2^0  f_n-1^-1  f_n-1^1  f_n^-2  f_n^2    vdots  vdots\nf_n-1^0  f_n^-1  f_n^1  0  0  cdots  0  0\nf_n^0  0  0  0  0  cdots  0  0\nendpmatrix\n\nand the Fourier coefficients are organized similarly:\n\nG = beginpmatrix\ng_0^0  g_0^-1  g_0^1  cdots  g_0^-n  g_0^n\ng_1^0  g_1^-1  g_1^1  cdots  g_1^-n  g_1^n\nvdots  vdots  vdots  ddots  vdots  vdots\ng_n-1^0  g_n-1^-1  g_n-1^1 cdots  g_n-1^-n  g_n-1^n\ng_n^0  0  0  cdots  g_n^-n  g_n^n\nendpmatrix\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.plan_sph2fourier",
    "page": "Home",
    "title": "FastTransforms.plan_sph2fourier",
    "category": "Function",
    "text": "Pre-computes the spherical harmonic transform.\n\n\n\n"
},

{
    "location": "index.html#Fast-Transforms-1",
    "page": "Home",
    "title": "Fast Transforms",
    "category": "section",
    "text": "leg2chebcheb2legplan_leg2chebplan_cheb2legcjticjtjjtplan_cjtplan_icjtnufft1nufft2nufft3inufft1inufft2plan_nufft1plan_nufft2plan_nufft3plan_inufft1plan_inufft2paduatransformipaduatransformplan_paduatransform!plan_ipaduatransform!sph2fourierfourier2sphplan_sph2fourier"
},

{
    "location": "index.html#FastTransforms.gaunt",
    "page": "Home",
    "title": "FastTransforms.gaunt",
    "category": "Function",
    "text": "Calculates the Gaunt coefficients, defined by:\n\na(mnmunuq) = frac2(n+nu-2q)+12 frac(n+nu-2q-m-mu)(n+nu-2q+m+mu) int_-1^+1 P_m^n(x) P_nu^mu(x) P_n+nu-2q^m+mu(x) rmdx\n\nor defined by:\n\nP_n^m(x) P_nu^mu(x) = sum_q=0^q_rm max a(mnmunuq) P_n+nu-2q^m+mu(x)\n\nThis is a Julia implementation of the stable recurrence described in:\n\nY.-l. Xu, Fast evaluation of Gaunt coefficients: recursive approach, J. Comp. Appl. Math., 85:53–65, 1997.\n\n\n\nCalculates the Gaunt coefficients in 64-bit floating-point arithmetic.\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.paduapoints",
    "page": "Home",
    "title": "FastTransforms.paduapoints",
    "category": "Function",
    "text": "Returns coordinates of the (n+1)(n+2)2 Padua points.\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.sphevaluate",
    "page": "Home",
    "title": "FastTransforms.sphevaluate",
    "category": "Function",
    "text": "Pointwise evaluation of spherical harmonic Y_ell^m(thetavarphi).\n\n\n\n"
},

{
    "location": "index.html#Other-Exported-Methods-1",
    "page": "Home",
    "title": "Other Exported Methods",
    "category": "section",
    "text": "gauntpaduapointssphevaluate"
},

{
    "location": "index.html#FastTransforms.half",
    "page": "Home",
    "title": "FastTransforms.half",
    "category": "Function",
    "text": "Compute a typed 0.5.\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.two",
    "page": "Home",
    "title": "FastTransforms.two",
    "category": "Function",
    "text": "Compute a typed 2.\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.δ",
    "page": "Home",
    "title": "FastTransforms.δ",
    "category": "Function",
    "text": "The Kronecker delta function:\n\ndelta_kj = leftbeginarrayccc 1  rm for  k = j 0  rm for  k ne jendarrayright\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.Λ",
    "page": "Home",
    "title": "FastTransforms.Λ",
    "category": "Function",
    "text": "The Lambda function Lambda(z) = fracGamma(z+frac12)Gamma(z+1) for the ratio of gamma functions.\n\n\n\nFor 64-bit floating-point arithmetic, the Lambda function uses the asymptotic series for tau in Appendix B of\n\nI. Bogaert and B. Michiels and J. Fostier, 𝒪(1) computation of Legendre polynomials and Gauss–Legendre nodes and weights for parallel computing, SIAM J. Sci. Comput., 34:C83–C101, 2012.\n\n\n\nThe Lambda function Lambda(z) = fracGamma(z+lambda_1)(z+lambda_2) for the ratio of gamma functions.\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.lambertw",
    "page": "Home",
    "title": "FastTransforms.lambertw",
    "category": "Function",
    "text": "The principal branch of the Lambert-W function, defined by x = W_0(x) e^W_0(x), computed using Halley's method for x in -e^-1infty).\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.pochhammer",
    "page": "Home",
    "title": "FastTransforms.pochhammer",
    "category": "Function",
    "text": "Pochhammer symbol (x)_n = fracGamma(x+n)Gamma(x) for the rising factorial.\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.stirlingseries",
    "page": "Home",
    "title": "FastTransforms.stirlingseries",
    "category": "Function",
    "text": "Stirling's asymptotic series for Gamma(z).\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.clenshawcurtis",
    "page": "Home",
    "title": "FastTransforms.clenshawcurtis",
    "category": "Function",
    "text": "Compute nodes and weights of the Clenshaw—Curtis quadrature rule with a Jacobi weight.\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.clenshawcurtisweights",
    "page": "Home",
    "title": "FastTransforms.clenshawcurtisweights",
    "category": "Function",
    "text": "Compute weights of the Clenshaw—Curtis quadrature rule with a Jacobi weight.\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.fejer1",
    "page": "Home",
    "title": "FastTransforms.fejer1",
    "category": "Function",
    "text": "Compute nodes and weights of Fejer's first quadrature rule with a Jacobi weight.\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.fejer2",
    "page": "Home",
    "title": "FastTransforms.fejer2",
    "category": "Function",
    "text": "Compute nodes and weights of Fejer's second quadrature rule with a Jacobi weight.\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.fejerweights1",
    "page": "Home",
    "title": "FastTransforms.fejerweights1",
    "category": "Function",
    "text": "Compute weights of Fejer's first quadrature rule with a Jacobi weight.\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.fejerweights2",
    "page": "Home",
    "title": "FastTransforms.fejerweights2",
    "category": "Function",
    "text": "Compute weights of Fejer's second quadrature rule with a Jacobi weight.\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.chebyshevjacobimoments1",
    "page": "Home",
    "title": "FastTransforms.chebyshevjacobimoments1",
    "category": "Function",
    "text": "Modified Chebyshev moments of the first kind with respect to the Jacobi weight:\n\n    int_-1^+1 T_n(x) (1-x)^alpha(1+x)^betarmdx\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.chebyshevjacobimoments2",
    "page": "Home",
    "title": "FastTransforms.chebyshevjacobimoments2",
    "category": "Function",
    "text": "Modified Chebyshev moments of the second kind with respect to the Jacobi weight:\n\n    int_-1^+1 U_n(x) (1-x)^alpha(1+x)^betarmdx\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.incrementα!",
    "page": "Home",
    "title": "FastTransforms.incrementα!",
    "category": "Function",
    "text": "Compute Jacobi expansion coefficients in P_n^(alpha+1beta)(x) given Jacobi expansion coefficients in P_n^(alphabeta)(x) in-place.\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.incrementβ!",
    "page": "Home",
    "title": "FastTransforms.incrementβ!",
    "category": "Function",
    "text": "Compute Jacobi expansion coefficients in P_n^(alphabeta+1)(x) given Jacobi expansion coefficients in P_n^(alphabeta)(x) in-place.\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.incrementαβ!",
    "page": "Home",
    "title": "FastTransforms.incrementαβ!",
    "category": "Function",
    "text": "Compute Jacobi expansion coefficients in P_n^(alpha+1alpha+1)(x) given Jacobi expansion coefficients in P_n^(alphaalpha)(x) in-place.\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.decrementα!",
    "page": "Home",
    "title": "FastTransforms.decrementα!",
    "category": "Function",
    "text": "Compute Jacobi expansion coefficients in P_n^(alpha-1beta)(x) given Jacobi expansion coefficients in P_n^(alphabeta)(x) in-place.\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.decrementβ!",
    "page": "Home",
    "title": "FastTransforms.decrementβ!",
    "category": "Function",
    "text": "Compute Jacobi expansion coefficients in P_n^(alphabeta-1)(x) given Jacobi expansion coefficients in P_n^(alphabeta)(x) in-place.\n\n\n\n"
},

{
    "location": "index.html#FastTransforms.decrementαβ!",
    "page": "Home",
    "title": "FastTransforms.decrementαβ!",
    "category": "Function",
    "text": "Compute Jacobi expansion coefficients in P_n^(alpha-1alpha-1)(x) given Jacobi expansion coefficients in P_n^(alphaalpha)(x) in-place.\n\n\n\n"
},

{
    "location": "index.html#Internal-Methods-1",
    "page": "Home",
    "title": "Internal Methods",
    "category": "section",
    "text": "FastTransforms.halfFastTransforms.twoFastTransforms.δFastTransforms.ΛFastTransforms.lambertwFastTransforms.pochhammerFastTransforms.stirlingseriesFastTransforms.clenshawcurtisFastTransforms.clenshawcurtisweightsFastTransforms.fejer1FastTransforms.fejer2FastTransforms.fejerweights1FastTransforms.fejerweights2FastTransforms.chebyshevjacobimoments1FastTransforms.chebyshevjacobimoments2FastTransforms.incrementα!FastTransforms.incrementβ!FastTransforms.incrementαβ!FastTransforms.decrementα!FastTransforms.decrementβ!FastTransforms.decrementαβ!"
},

]}
